import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

const usePromise = (promiseCreator, deps, action) => {
  // 로딩중 / 완료 / 실패에 대한 상태 관리
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  const questions = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        //여기서 각 url별 axios메서드 처리
        const resolved = await promiseCreator();
        setResolved(resolved);
        console.log(resolved);
        console.log(resolved.data);
        dispatch(action(resolved.data));
        console.log(questions);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
  }, [deps]);

  return [loading, resolved, error];
};
export default usePromise;
