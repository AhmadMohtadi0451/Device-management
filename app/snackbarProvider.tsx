"use client";

import Snackbar from "@/components/ui/snackbar";
import { createContext, useContext, useState, ReactNode } from "react";

interface SnackbarContextType {
  showSuccess: (message: string) => void;
  showError: (message: string) => void;
  showInfo: (message: string) => void;
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined,
);

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within SnackbarProvider");
  }
  return context;
};

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const [snackbar, setSnackbar] = useState<{
    message: string;
    type: "success" | "error" | "info";
    isOpen: boolean;
  }>({
    message: "",
    type: "info",
    isOpen: false,
  });

  const showSuccess = (message: string) => {
    setSnackbar({ message, type: "success", isOpen: true });
  };

  const showError = (message: string) => {
    setSnackbar({ message, type: "error", isOpen: true });
  };

  const showInfo = (message: string) => {
    setSnackbar({ message, type: "info", isOpen: true });
  };

  const handleClose = () => {
    setSnackbar((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <SnackbarContext.Provider value={{ showSuccess, showError, showInfo }}>
      {children}
      {snackbar.isOpen && (
        <Snackbar
          message={snackbar.message}
          type={snackbar.type}
          onClose={handleClose}
        />
      )}
    </SnackbarContext.Provider>
  );
};
