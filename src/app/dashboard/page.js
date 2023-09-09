import style from "@/app/dashboard/dashboard.module.css";

export default function Dashboard() {
  return (
    <>
      <div className={`${style.container}`}>
        <iframe
          width="100%"
          height="100%"
          src="https://lookerstudio.google.com/embed/reporting/c35bb677-d509-4f04-b9be-dcc5f4334cf2/page/SQGbD"
          // frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
