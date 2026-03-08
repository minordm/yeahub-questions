import { useEffect, useState, type FC } from "react";
import AccordionButton from "../AccordionItem/AccordionButton";
import styles from "./Content.module.css";
import PaginationButton from "../Pagination/PaginationButton";
import axios, { AxiosError } from "axios";

export interface IQuestionRequest {
  description: string;
  id: number;
  keywords: string[];
  longAnswer: string;
  rate: number;
  shortAnswer: string;
  title: string;
  complexity: number;
}

// function createPagination(length: number): number[] {
//   const delta = 1;
//   const newArr = [];
//   const withDots = [];

//   for (let i = 1; i <= length; i++) {
//     if(i === 1 || i === length || (i >= current))
//     newArr.push(i);
//   }

//   return newArr;
// }

const Content: FC<{
  search: string;
  specialization: string;
  selectSkill: string;
  selectComplexity: string;
  selectRating: string;
}> = ({
  search,
  specialization,
  selectSkill,
  selectComplexity,
  selectRating,
}) => {
  const [question, setQuestion] = useState<{
    data: IQuestionRequest[];
    total: number;
    page: number;
    limit: number;
  }>();
  const [error, setError] = useState<string | null>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [specializationTitle, setSpecializationTitle] = useState();
  const [errorSpecializationTitle, setErrorSpecializationTitle] = useState<
    string | null
  >();
  const [isLoadingSpecializationTitle, setIsLoadingSpecializationTitle] =
    useState<boolean>(true);

  const [curPage, setCurPage] = useState(1);

  // useEffect(() => {
  //   setCurPage(1);
  // }, [search, specialization, selectComplexity]);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const titleQuery = search ? `&title=${search}` : "";
        const complexityQuery = selectComplexity
          ? `&complexity=${selectComplexity}`
          : "";
        const rateQuery = selectRating ? `&rate=${selectRating}` : "";
        const skillQuery = selectSkill ? `&skills=${selectSkill}` : "";

        const { data } = await axios.get<{
          data: IQuestionRequest[];
          page: number;
          limit: number;
          total: number;
        }>(
          `https://api.yeatwork.ru/questions/public-questions?${titleQuery}${complexityQuery}${rateQuery}${skillQuery}`,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            params: {
              page: curPage,
              limit: 10,
              // title: search ?? "",
              specializationId: specialization,
              // complexity: selectComplexity ?? "",
            },
          },
        );

        // console.dir(data);
        setQuestion(data);
        setIsLoading(false);
      } catch (err) {
        if (err instanceof AxiosError) {
          setError(err.message);
        }
        setIsLoading(false);
      }
    };

    fetch();
  }, [
    search,
    curPage,
    specialization,
    selectComplexity,
    selectRating,
    selectSkill,
  ]);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoadingSpecializationTitle(true);

        const { data } = await axios.get<{ id: number; title: string }>(
          `https://api.yeatwork.ru/specializations/${specialization}`,
        );

        // console.dir(data);
        setSpecializationTitle(data);
        setIsLoadingSpecializationTitle(false);
      } catch (err) {
        if (err instanceof AxiosError) {
          setErrorSpecializationTitle(err.message);
        }
        setIsLoadingSpecializationTitle(false);
      }
    };

    fetch();
  }, [specialization]);

  // let arrPagination: number[] = [];
  // if (question) {
  //   arrPagination = createPagination(
  //     Math.ceil(question.total / question.limit),
  //   );
  //   // console.log(arrPagination);
  // }

  if (error) return <p>Ошибка</p>;

  return (
    <div className={styles.wrapper}>
      <div className={styles.questions}>
        <h1 className={styles.title}>
          Вопросы{" "}
          {!isLoadingSpecializationTitle ? specializationTitle.title : ""}
        </h1>
        <div className={styles["question-container"]}>
          {isLoading ? (
            <>Загрузка...</>
          ) : question?.data.length ? (
            question?.data.map((question: IQuestionRequest) => (
              <AccordionButton key={question.id} {...question} />
            ))
          ) : (
            <div className={styles["wrapper-not-found"]}>
              <div className={styles.question} style={{ cursor: "default" }}>
                <h2>К сожалению, по запросу "{search}" ничего не найдено.</h2>
                <p>
                  Попробуйте изменить запрос или воспользуйтесь нашими
                  категориями.
                </p>
                <button>Сбросить фильтры</button>
              </div>
            </div>
          )}
        </div>
      </div>
      {question?.data.length > 0 && (
        <PaginationButton
          pageCount={Math.ceil(question.total / question.limit)}
          // curPage={curPage}
          setCurPage={setCurPage}
          // arr={arrPagination}
        />
      )}
    </div>
  );
};

export default Content;
