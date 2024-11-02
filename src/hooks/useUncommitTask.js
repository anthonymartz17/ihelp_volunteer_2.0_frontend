import { useState } from 'react';
import { unCommitToTask } from '../services/fetch';

export function useUncommitTask() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const uncommit = async (taskId, token) => {
    setIsLoading(true);
    try {
      const result = await unCommitToTask(taskId, token);
      return result;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { uncommit, isLoading, error };
}
