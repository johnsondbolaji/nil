import React from "react";
import Records from "../Gallery/Certificates.json";
function Cert() {
  return (
    <div className="card">
      {Records.map(val => {
        return (
          <div
            className={"bg-light-green dib br3 pa3 ma2 grow bw2 shado-5 tc"}
            key={val.id}
          >
            <img src={val.icon2} width={580} height={550} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default Cert;
