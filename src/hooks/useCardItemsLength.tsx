// Lib
import { useSelector } from 'react-redux';

const useCardItemsLength = () => {
  const { items } = useSelector((state: any) => ({
    items: state?.Cart?.items,
  }));

  return items.length === 0 ? undefined : items.length;
};

export default useCardItemsLength;
