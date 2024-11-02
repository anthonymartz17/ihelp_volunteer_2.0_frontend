import { useState } from 'react';
import { commitToTask } from '../services/fetch';

export function useCommitTask() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const commit = async (taskId, token) => {
    setIsLoading(true);
    try {
      const result = await commitToTask(taskId, token);
      return result;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { commit, isLoading, error };
}
