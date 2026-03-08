import {
  useEffect,
  useState,
  // type Dispatch,
  type FC,
  type MouseEventHandler,
  // type SetStateAction,
} from "react";
import CategoryList from "../CategoryList/CategoryList";
import styles from "./CategoryBlock.module.css";
import axios, { AxiosError } from "axios";

export interface ICategoryProps {
  id: string;
  title: string;
  imageSrc: string;
}

interface IFetchData {
  data: ICategoryProps[];
  total: number;
}

interface ICategoryBlockProps {
  selectedCategory: string;
  // selectCategory: Dispatch<SetStateAction<string>>;
  selectCategory: (prevState: string) => void;
  title: string;
  url?: string;
  arr?: ICategoryProps[];
}

const CategoryBlock: FC<ICategoryBlockProps> = ({
  title,
  url,
  selectedCategory,
  selectCategory,
  arr,
}) => {
  const [data, setData] = useState<IFetchData>();
  const [isLoading, setIsLoading] = useState<boolean>(() =>
    url ? true : false,
  );
  const [error, setError] = useState<AxiosError | null>();
  const [limit, setLimit] = useState<number>(5);

  useEffect(() => {
    const fetch = async (urlQuery: string): Promise<void> => {
      try {
        setIsLoading(true);
        const { data } = await axios.get<IFetchData>(urlQuery, {
          params: {
            limit: limit,
          },
        });

        // console.log(title, data);
        setData(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        if (err instanceof AxiosError) {
          setError(err);
        }
        setIsLoading(false);
      }
    };

    if (url) {
      fetch(url);
    }
  }, [selectedCategory, url, limit]);

  const showMoreCategories: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    setLimit(data?.total);
  };

  const hideMoreCategories: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    setLimit(5);
  };

  if (error) return <>{error.message}</>;

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <>Загрузка...</>
      ) : (
        <>
          <h3 className={styles.title}>{title}</h3>
          <CategoryList
            selectedCategory={selectedCategory}
            selectCategory={selectCategory}
            categories={url ? data.data : arr}
          />
          {url && limit === 5
            ? data?.total > 5 && (
                <a onClick={showMoreCategories}>Посмотреть&nbsp;все</a>
              )
            : data?.total > 5 && <a onClick={hideMoreCategories}>Скрыть</a>}
        </>
      )}
    </div>
  );
};

export default CategoryBlock;
