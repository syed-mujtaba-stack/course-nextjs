"use client";
import { Counter } from "./Counter";

export const Client = ({ counter }: { counter: Counter }) => {
  return <div onClick={counter.inc}>Will it work?</div>;
};
