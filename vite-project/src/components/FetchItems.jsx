import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchStatusActions } from "../store/fetchStatusSlice";
import {itemsActions} from "../store/itemSlice"
const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;


    dispatch(fetchStatusActions.markFetchingStarted());
    fetch("http://localhost:8080/items", )
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(itemsActions.addInitialItems(items[0]));
      });

    return () => {
     
    };
  }, [fetchStatus]);

  return <></>;
};

export default FetchItems;