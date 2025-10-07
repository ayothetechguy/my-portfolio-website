'use client';

import CookieConsent from "react-cookie-consent";

export default function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept All"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="ayofemimelehon-cookie-consent"
      style={{ 
        background: "rgba(0, 0, 0, 0.95)",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)"
      }}
      buttonStyle={{ 
        background: "white",
        color: "#111827",
        fontSize: "14px",
        fontWeight: "600",
        borderRadius: "8px",
        padding: "10px 24px"
      }}
      declineButtonStyle={{
        background: "transparent",
        color: "white",
        fontSize: "14px",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "8px",
        padding: "10px 24px"
      }}
      expires={365}
    >
      This website uses cookies to enhance your experience and analyze site traffic. 
      By clicking "Accept All", you consent to our use of cookies. 
      <a href="/privacy-policy" style={{ color: "#60a5fa", marginLeft: "8px" }}>
        Learn more
      </a>
    </CookieConsent>
  );
}