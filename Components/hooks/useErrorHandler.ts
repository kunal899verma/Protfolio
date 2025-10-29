import { useState, useCallback } from 'react';

interface ErrorState {
  error: Error | null;
  isError: boolean;
  errorMessage: string;
}

interface UseErrorHandlerReturn extends ErrorState {
  handleError: (error: Error | string) => void;
  clearError: () => void;
  withErrorHandling: <T extends any[], R>(
    fn: (...args: T) => Promise<R>
  ) => (...args: T) => Promise<R | null>;
}

export const useErrorHandler = (): UseErrorHandlerReturn => {
  const [errorState, setErrorState] = useState<ErrorState>({
    error: null,
    isError: false,
    errorMessage: '',
  });

  const handleError = useCallback((error: Error | string) => {
    const errorObj = typeof error === 'string' ? new Error(error) : error;
    
    console.error('Error caught by useErrorHandler:', errorObj);
    
    setErrorState({
      error: errorObj,
      isError: true,
      errorMessage: errorObj.message,
    });

    // Optional: Send error to logging service
    // logErrorToService(errorObj);
  }, []);

  const clearError = useCallback(() => {
    setErrorState({
      error: null,
      isError: false,
      errorMessage: '',
    });
  }, []);

  const withErrorHandling = useCallback(
    <T extends any[], R>(fn: (...args: T) => Promise<R>) =>
      async (...args: T): Promise<R | null> => {
        try {
          clearError();
          return await fn(...args);
        } catch (error) {
          handleError(error as Error);
          return null;
        }
      },
    [handleError, clearError]
  );

  return {
    ...errorState,
    handleError,
    clearError,
    withErrorHandling,
  };
};

// Utility function for safe property access
export const safeGet = <T>(
  obj: any,
  path: string,
  defaultValue: T
): T => {
  try {
    const keys = path.split('.');
    let result = obj;
    
    for (const key of keys) {
      if (result == null || typeof result !== 'object') {
        return defaultValue;
      }
      result = result[key];
    }
    
    return result !== undefined ? result : defaultValue;
  } catch {
    return defaultValue;
  }
};

// Utility function for safe array operations
export const safeArray = <T>(arr: any, defaultValue: T[] = []): T[] => {
  return Array.isArray(arr) ? arr : defaultValue;
};

// Utility function for safe string operations
export const safeString = (str: any, defaultValue: string = ''): string => {
  return typeof str === 'string' ? str : defaultValue;
};

// Utility function for safe number operations
export const safeNumber = (num: any, defaultValue: number = 0): number => {
  const parsed = Number(num);
  return isNaN(parsed) ? defaultValue : parsed;
};