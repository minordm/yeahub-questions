import type { IQuizStatus } from "@entities/quiz";
import useLocalStorage from "@shared/lib/hooks/useLocalStorage";
import type { IQuestion } from "@shared/model/types";
import { useEffect, useState } from "react";

interface IUseSaveToLocalStorageProps {
  question: IQuestion;
  curIndex: number;
}

function useQuizStatus({ question, curIndex }: IUseSaveToLocalStorageProps) {
  const [isKnown, setIsKnown] = useState<boolean | null>(null);

  const { value: cache, setStoredValue: setCache } = useLocalStorage<
    IQuizStatus[]
  >("quizStatus", []);

  // Читаем при смене curIndex
  useEffect(() => {
    setIsKnown(cache?.[curIndex]?.isKnown ?? null);
  }, [curIndex]);

  // Сохраняем при изменении isKnown
  useEffect(() => {
    if (isKnown === null) return;

    const updated = [...(cache ?? [])];
    const existedIndex = updated.findIndex((item) => item.id === question.id);

    if (existedIndex !== -1) {
      updated[existedIndex] = { ...updated[existedIndex], isKnown };
    } else {
      updated.push({ id: question.id, title: question.title, isKnown });
    }

    setCache(updated);
  }, [curIndex, question, isKnown]);

  return { isKnown, setIsKnown };
}

export default useQuizStatus;
