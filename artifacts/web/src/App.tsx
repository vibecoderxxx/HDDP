import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider, SignIn, SignUp } from "@clerk/react";
import Home from "@/pages/Home";
import Resources from "@/pages/Resources";
import TeamPage from "@/pages/TeamPage";
import { CaseStudies } from "@/pages/CaseStudies";
import { Tutorials } from "@/pages/Tutorials";
import { Community } from "@/pages/Community";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY as string;
const clerkProxyUrl = import.meta.env.VITE_CLERK_PROXY_URL as string | undefined;

function stripBase(path: string): string {
  return basePath && path.startsWith(basePath)
    ? path.slice(basePath.length) || "/"
    : path;
}

if (!clerkPubKey) {
  throw new Error("Missing VITE_CLERK_PUBLISHABLE_KEY");
}

const clerkAppearance = {
  cssLayerName: "clerk",
  options: {
    logoPlacement: "inside" as const,
    logoLinkUrl: basePath || "/",
    logoImageUrl: `${window.location.origin}${basePath}/logo.svg`,
  },
  variables: {
    colorPrimary: "#3D6BE5",
    colorForeground: "#0F172A",
    colorMutedForeground: "#64748B",
    colorDanger: "#E05B52",
    colorBackground: "#F8FAFC",
    colorInput: "#ffffff",
    colorInputForeground: "#0F172A",
    colorNeutral: "#CBD5E1",
    fontFamily: "'Inter', sans-serif",
    borderRadius: "8px",
  },
  elements: {
    rootBox: "w-full flex justify-center",
    cardBox: "bg-[#F8FAFC] rounded-2xl w-[440px] max-w-full overflow-hidden shadow-xl border border-[#E2E8F0]",
    card: "!shadow-none !border-0 !bg-transparent !rounded-none",
    footer: "!shadow-none !border-0 !bg-transparent !rounded-none",
    headerTitle: "text-[#0F172A] font-normal text-3xl font-serif-italic",
    headerSubtitle: "text-[#64748B]",
    socialButtonsBlockButtonText: "text-[#0F172A] font-medium",
    formFieldLabel: "text-[#0F172A] font-medium text-sm",
    footerActionLink: "text-[#3D6BE5] font-semibold",
    footerActionText: "text-[#64748B]",
    dividerText: "text-[#64748B]",
    identityPreviewEditButton: "text-[#3D6BE5]",
    formFieldSuccessText: "text-emerald-600",
    alertText: "text-[#0F172A]",
    logoBox: "mb-1",
    logoImage: "h-9",
    socialButtonsBlockButton: { border: "1px solid #E2E8F0", backgroundColor: "#ffffff" },
    formButtonPrimary: { backgroundColor: "#3D6BE5", color: "#ffffff", fontWeight: "600", fontSize: "15px" },
    formFieldInput: { border: "1px solid #CBD5E1", backgroundColor: "#ffffff", color: "#0F172A", padding: "0 12px" },
    footerAction: "bg-transparent",
    dividerLine: "bg-[#E2E8F0]",
    alert: "bg-red-50 border-red-200",
    formFieldRow: "gap-4",
    main: "gap-5",
  },
};

const CLERK_OVERRIDE_CSS = `
  [class*="cl-formButtonPrimary"] {
    border-radius: 8px !important;
    height: 44px !important;
    min-height: 44px !important;
    overflow: hidden !important;
  }
  [class*="cl-socialButtonsBlockButton"] {
    border-radius: 8px !important;
    height: 44px !important;
    min-height: 44px !important;
    overflow: hidden !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
  [class*="cl-socialButtonsBlockButtonIconBox"] {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  [class*="cl-socialButtonsBlockButtonText"] {
    line-height: 1 !important;
    display: flex !important;
    align-items: center !important;
  }
  [class*="cl-formFieldInput"] {
    border-radius: 8px !important;
    height: 44px !important;
    min-height: 44px !important;
  }
  [class*="cl-otpCodeFieldInput"] {
    border-radius: 8px !important;
  }
  [class*="cl-header"] {
    padding-bottom: 4px !important;
  }
  [class*="cl-card"] {
    gap: 16px !important;
  }
  [class*="cl-main"] {
    gap: 14px !important;
  }
`;

function injectClerkOverride() {
  document.getElementById("sensa-clerk-override")?.remove();
  const style = document.createElement("style");
  style.id = "sensa-clerk-override";
  style.textContent = CLERK_OVERRIDE_CSS;
  document.head.appendChild(style);
}

function ClerkStyleOverride() {
  useEffect(() => {
    injectClerkOverride();

    const observer = new MutationObserver((mutations) => {
      let clerkInjected = false;
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          const el = node as HTMLElement;
          if (el.nodeName === "STYLE" && el.id !== "sensa-clerk-override") {
            clerkInjected = true;
          }
        }
      }
      if (clerkInjected) injectClerkOverride();
    });

    observer.observe(document.head, { childList: true });

    return () => {
      observer.disconnect();
      document.getElementById("sensa-clerk-override")?.remove();
    };
  }, []);
  return null;
}

function SignInPage() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4">
      <ClerkStyleOverride />
      <SignIn
        routing="path"
        path={`${basePath}/sign-in`}
        signUpUrl={`${basePath}/sign-up`}
        fallbackRedirectUrl={`${basePath}/resources`}
      />
    </div>
  );
}

function SignUpPage() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4">
      <ClerkStyleOverride />
      <SignUp
        routing="path"
        path={`${basePath}/sign-up`}
        signInUrl={`${basePath}/sign-in`}
        fallbackRedirectUrl={`${basePath}/resources`}
      />
    </div>
  );
}


function ClerkProviderWithRoutes() {
  const [, setLocation] = useLocation();

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      proxyUrl={clerkProxyUrl}
      appearance={clerkAppearance}
      signInUrl={`${basePath}/sign-in`}
      signUpUrl={`${basePath}/sign-up`}
      localization={{
        signIn: {
          start: {
            title: "Welcome back",
            subtitle: "Sign in to access HDDP",
          },
        },
        signUp: {
          start: {
            title: "Create your account",
            subtitle: "Get started with HDDP today",
          },
        },
      }}
      routerPush={(to) => setLocation(stripBase(to))}
      routerReplace={(to) => setLocation(stripBase(to), { replace: true })}
    >
      <ThemeProvider defaultTheme="light" storageKey="hddp-theme">
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/resources/*?" component={Resources} />
              <Route path="/team" component={TeamPage} />
              <Route path="/case-studies" component={CaseStudies} />
              <Route path="/tutorials" component={Tutorials} />
              <Route path="/community" component={Community} />
              <Route path="/sign-in/*?" component={SignInPage} />
              <Route path="/sign-up/*?" component={SignUpPage} />
              <Route component={NotFound} />
            </Switch>
            <Toaster />
          </TooltipProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </ClerkProvider>
  );
}

function App() {
  return (
    <WouterRouter base={basePath}>
      <ClerkProviderWithRoutes />
    </WouterRouter>
  );
}

export default App;
