import style from "@/app/predictor/predict.module.css";

export default function Predictor() {
  return (
    <>
      <div className={`${style.container}`}>
        <iframe
          src="https://deployml.streamlit.app/?embed=true"
          height="100%"
          style={{ width: "100%", border: "none" }}
        ></iframe>
      </div>
    </>
  );
}
