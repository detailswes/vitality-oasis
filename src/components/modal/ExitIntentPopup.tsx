"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ExitIntent from "@/utils/ExitIntent";
import { useEffect, useState, useRef } from "react";

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Check if the user has already dismissed the popup
    const hasDismissedPopup = localStorage.getItem("exitIntentDismissed");

    if (hasDismissedPopup) {
      // If dismissed, don't show the popup
      return;
    }

    // For desktop with mouse movement
    const removeExitIntent = ExitIntent({
      threshold: 10,
      eventThrottle: 100,
      onExitIntent: () => {
        setIsOpen(true);
      },
    });

    // For mobile: trigger popup after 15-20 seconds of inactivity
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (isMobile) {
      if (localStorage.getItem("exitIntentDismissed")) {
        return;
      }
      const resetInactivityTimer = () => {
        // Clear existing timer
        if (inactivityTimerRef.current) {
          clearTimeout(inactivityTimerRef.current);
        }

        // Set new timer
        inactivityTimerRef.current = setTimeout(() => {
          setIsOpen(true);
        }, 15000); // 15 seconds
      };

      // Add event listeners for mobile interactions
      const events = ["touchstart", "touchmove", "touchend", "click", "scroll"];
      events.forEach((event) =>
        window.addEventListener(event, resetInactivityTimer)
      );

      // Initial timer setup
      resetInactivityTimer();

      // Cleanup function
      return () => {
        events.forEach((event) =>
          window.removeEventListener(event, resetInactivityTimer)
        );
        if (inactivityTimerRef.current) {
          clearTimeout(inactivityTimerRef.current);
        }
        removeExitIntent();
      };
    }

    // Cleanup for desktop
    return () => {
      removeExitIntent();
    };
  }, []);

  const handleDismiss = () => {
    // Mark the popup as dismissed in localStorage
    localStorage.setItem("exitIntentDismissed", "true");
    setIsOpen(false);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[666px] bg-[#F7F7FB] !rounded-[20px]">
          <div className="w-full sm:max-w-[566px] mx-auto">
            <h2 className="text-center font-Bodonitown font-medium text-5xl md:text-[56px] pt-10">
              Wait! Don't leave without taking the first step toward recovery.
            </h2>

            <div className="gradient-line w-[200px] h-[1px] my-[35px] mx-auto" />

            <p className="text-center text-text mb-[35px]">
              Talk to an expert now or complete your assessment
            </p>

            <div className="flex justify-between md:justify-center gap-[10px] flex-col md:flex-row pb-10">
              <Button className="hover:bg-secondary hover:text-black flex items-center ring-0 focus-visible:ring-0">
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.48755 6.74828C5.48755 6.54937 5.56656 6.3586 5.70722 6.21795C5.84787 6.0773 6.03863 5.99828 6.23755 5.99828H10.7375C10.9365 5.99828 11.1272 6.0773 11.2679 6.21795C11.4085 6.3586 11.4875 6.54937 11.4875 6.74828C11.4875 6.94719 11.4085 7.13796 11.2679 7.27861C11.1272 7.41926 10.9365 7.49828 10.7375 7.49828H6.23755C6.03863 7.49828 5.84787 7.41926 5.70722 7.27861C5.56656 7.13796 5.48755 6.94719 5.48755 6.74828ZM6.23755 8.99828C6.03863 8.99828 5.84787 9.0773 5.70722 9.21795C5.56656 9.3586 5.48755 9.54937 5.48755 9.74828C5.48755 9.94719 5.56656 10.138 5.70722 10.2786C5.84787 10.4193 6.03863 10.4983 6.23755 10.4983H9.23754C9.43646 10.4983 9.62722 10.4193 9.76787 10.2786C9.90853 10.138 9.98754 9.94719 9.98754 9.74828C9.98754 9.54937 9.90853 9.3586 9.76787 9.21795C9.62722 9.0773 9.43646 8.99828 9.23754 8.99828H6.23755ZM0.98755 7.49828C0.987926 5.85398 1.52866 4.25537 2.52654 2.94848C3.52441 1.64159 4.92412 0.698846 6.51025 0.265343C8.09637 -0.16816 9.78101 -0.0683973 11.3049 0.549277C12.8288 1.16695 14.1074 2.2683 14.9441 3.68383C15.7807 5.09937 16.129 6.75062 15.9353 8.38347C15.7416 10.0163 15.0167 11.5403 13.8721 12.7208C12.7275 13.9013 11.2266 14.6729 9.60055 14.9169C7.97446 15.161 6.31324 14.8638 4.87255 14.0713L1.95655 14.9593C1.82649 14.9989 1.6881 15.0024 1.55619 14.9695C1.42428 14.9365 1.30381 14.8683 1.20767 14.7722C1.11153 14.676 1.04333 14.5555 1.01037 14.4236C0.977412 14.2917 0.98093 14.1533 1.02055 14.0233L1.90855 11.1028C1.3037 9.9977 0.986952 8.75806 0.98755 7.49828ZM8.48754 1.49829C7.42245 1.4982 6.37653 1.78163 5.45721 2.31947C4.5379 2.85731 3.77832 3.63017 3.25649 4.55868C2.73466 5.48718 2.46941 6.53785 2.48796 7.60278C2.50651 8.66771 2.8082 9.70851 3.36205 10.6183C3.41703 10.7087 3.45226 10.8096 3.46545 10.9146C3.47863 11.0196 3.46947 11.1261 3.43855 11.2273L2.86405 13.1158L4.74955 12.5413C4.85104 12.5104 4.95793 12.5013 5.06317 12.5148C5.1684 12.5282 5.26959 12.5638 5.36005 12.6193C6.15081 13.1021 7.04265 13.3952 7.96565 13.4756C8.88865 13.5561 9.81774 13.4217 10.6801 13.0829C11.5425 12.7442 12.3147 12.2104 12.9362 11.5233C13.5577 10.8362 14.0117 10.0145 14.2625 9.12262C14.5134 8.23071 14.5542 7.29284 14.3819 6.3825C14.2096 5.47216 13.8289 4.61409 13.2695 3.87554C12.71 3.13699 11.9872 2.53802 11.1576 2.12558C10.3279 1.71314 9.41405 1.49843 8.48754 1.49829Z"
                    fill="currentColor"
                  />
                </svg>
                Talk to an Expert
              </Button>
              <Button
                onClick={handleDismiss}
                className="bg-secondary text-black hover:text-white flex items-center"
              >
                <svg
                  width="15"
                  height="13"
                  viewBox="0 0 15 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.9841 0.251435C12.7545 0.12382 12.502 0.0426881 12.2411 0.0126721C11.9801 -0.0173438 11.7158 0.00434439 11.4632 0.0764982C11.2106 0.148652 10.9747 0.269858 10.769 0.433193C10.5632 0.596528 10.3917 0.798793 10.2641 1.02843L6.55112 7.71043L4.42612 5.58543C4.24163 5.39441 4.02094 5.24205 3.77693 5.13723C3.53293 5.03241 3.27049 4.97724 3.00493 4.97493C2.73937 4.97263 2.47601 5.02323 2.23022 5.12379C1.98442 5.22435 1.76112 5.37286 1.57334 5.56064C1.38555 5.74843 1.23704 5.97173 1.13648 6.21753C1.03592 6.46332 0.985317 6.72668 0.987624 6.99224C0.989932 7.2578 1.0451 7.52024 1.14992 7.76424C1.25474 8.00825 1.4071 8.22894 1.59813 8.41343L5.59813 12.4134C5.97613 12.7924 6.48612 13.0004 7.01213 13.0004L7.28913 12.9804C7.59568 12.9376 7.88809 12.8241 8.14334 12.649C8.3986 12.4739 8.60974 12.242 8.76013 11.9714L13.7601 2.97143C13.8878 2.74189 13.969 2.48944 13.9991 2.22851C14.0291 1.96759 14.0075 1.70329 13.9355 1.45071C13.8634 1.19813 13.7423 0.962223 13.5791 0.75645C13.4159 0.550677 13.2137 0.379072 12.9841 0.251435Z"
                    fill="currentColor"
                  />
                </svg>
                Complete Your Assessment
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
