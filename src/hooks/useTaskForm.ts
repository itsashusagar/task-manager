import { useState, useCallback, FormEvent } from 'react';

interface UseTaskFormReturn {
  taskText: string;
  error: string | null;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>, onSubmit: (text: string) => void) => void;
  resetForm: () => void;
}

export const useTaskForm = (): UseTaskFormReturn => {
  const [taskText, setTaskText] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(e.target.value);
    if (error) setError(null);
  }, [error]);

  const validateForm = useCallback((): boolean => {
    if (!taskText.trim()) {
      setError('Task cannot be empty');
      return false;
    }
    return true;
  }, [taskText]);

  const handleSubmit = useCallback((
    e: FormEvent<HTMLFormElement>,
    onSubmit: (text: string) => void
  ) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(taskText.trim());
      resetForm();
    }
  }, [taskText, validateForm]);

  const resetForm = useCallback(() => {
    setTaskText('');
    setError(null);
  }, []);

  return {
    taskText,
    error,
    handleChange,
    handleSubmit,
    resetForm
  };
};