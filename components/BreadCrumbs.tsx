import React from "react";

type Props = {};

export default function ({}: Props) {
  return (
    <div className="flex flex-col z-40 absolute top-[400px] right-10 gap-2">
      <style jsx>{`
        .dot {
          background-color: #0000aa;
          opacity: 0.5;
          height: 10px;
          width: 10px;
          border-radius: 100px;
        }
      `}</style>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  );
}
