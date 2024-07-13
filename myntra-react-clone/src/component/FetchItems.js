import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStatusActions } from "../store/FetchStatusSlice";
import { useEffect } from "react";
import { itemActions } from "../store/ItemSlice";
function FetchItems() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStatusActions.markFetchingStarted());
    fetch("http://localhost:7272/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markDone());
        dispatch(fetchStatusActions.markFetchingDone());
        dispatch(itemActions.addIntitialItem(items[0]));
      });

    // return () => {
    //   controller.abort();
    // };
  }, [fetchStatus]);

  return <></>;
}
export default FetchItems;
