"use client";
import ContactStyle from "@/styles/contact/contact.module.css";
import ButtonStyle from "@/styles/btn.module.css";
import { useState } from "react";

export default function ContactForm() {
  // const [handleSubmit, setHandleSubmit] = useState(false)
  async function handleSubmit(event: any) {
    event.preventDefault();
    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      tel: String(event.target.tel.value),
      comment: String(event.target.comment.value),
    };
    console.log(data);
    const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    if (response.ok) {
        console.log("the comment is sent")
    }
    if (response.ok) {
        console.log("Error sendding comment")
    }
         
  }
  return (
    <form onSubmit={handleSubmit} className={ContactStyle["contact__form"]}>
      <table className={ContactStyle["contact__info--table"]}>
        <tbody className={ContactStyle["contact__info--table"]}>
          <tr>
            <th className={ContactStyle["contact__info--table-row"]}>
              <label
                htmlFor="name"
                className={`${ContactStyle["label-input"]} ${
                  !handleSubmit ? ContactStyle["active--label-input"] : ""
                }`}
              >
                name
              </label>
              <input
                required
                minLength={3}
                maxLength={100}
                id="name"
                className={`${ContactStyle["contact__info--input"]} ${ContactStyle["name-input"]}`}
                type="text"
              />
            </th>
            <th className={ContactStyle["contact__info--table-row"]}>
              <label
                htmlFor="email"
                className={`${ContactStyle["label-input"]}`}
              >
                email *
              </label>
              <input
                required
                minLength={3}
                maxLength={150}
                id="email"
                className={`${ContactStyle["contact__info--input"]}`}
                type="email"
              />
            </th>
          </tr>
          <tr>
            <th
              className={ContactStyle["contact__info--table-row"]}
              colSpan={2}
            >
              <label htmlFor="tel" className={`${ContactStyle["label-input"]}`}>
                phone number
              </label>
              <input
                minLength={3}
                maxLength={100}
                id="tel"
                className={`${ContactStyle["contact__info--input"]}`}
                type="tel"
              />
            </th>
          </tr>
          <tr>
            <th
              className={ContactStyle["contact__info--table-row"]}
              colSpan={2}
            >
              <label
                htmlFor="comment"
                className={`${ContactStyle["label-input"]}`}
              >
                comment
              </label>
              <textarea
                required
                minLength={3}
                maxLength={500}
                id="comment"
                className={`${ContactStyle["contact__info--input"]} ${ContactStyle["contact__info--input-comment"]}`}
              />
            </th>
          </tr>
        </tbody>
      </table>
      <button
        className={`${ButtonStyle["btn-primary"]} ${ContactStyle["btn--submit"]}`}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
