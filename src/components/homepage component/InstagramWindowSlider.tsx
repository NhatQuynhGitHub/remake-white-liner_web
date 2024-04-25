import InstagramFeedStyle from "@/styles/homepage/instagram-feed.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaRegWindowClose } from "react-icons/fa";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";

interface InstagramWindowSliderProps {
  InstagramBoxes: any;
  boxIndex: number;
  handleCloseWindow: () => void;
  onNextBox: () => void;
  onPrevBox: () => void;
}

export default function InstagramWindowSlider({
  InstagramBoxes,
  boxIndex,
  handleCloseWindow,
  onNextBox,
  onPrevBox,
}: InstagramWindowSliderProps) {
  return (
    <div>
      <div className={InstagramFeedStyle["modal-behind_instagram__window"]}>
        <div className={InstagramFeedStyle["instagram__window"]}>
          <ul
            className={InstagramFeedStyle["instagram__window__list"]}
            style={{ position: "relative" }}
          >
            {InstagramBoxes.map((box: any, index: number) => (
              <li
                key={index}
                className={InstagramFeedStyle["instagram__window__item"]}
                style={{ transform: `translateX(${-100 * boxIndex}%)` }}
              >
                <div
                  className={InstagramFeedStyle["instagram__window-fullscreen"]}
                >
                  <div
                    className={
                      InstagramFeedStyle["instagram__window__item-img"]
                    }
                  >
                    <Image
                      src={box.scr}
                      alt={"Present for" + " " + box.alt}
                      width={1000}
                      height={1000}
                      className={InstagramFeedStyle["instagram__window-img"]}
                    />
                  </div>

                  <div
                    className={
                      InstagramFeedStyle["instagram__window__item-detail"]
                    }
                  >
                    <div
                      className={
                        InstagramFeedStyle["instagram__window__item--header"]
                      }
                    >
                      <FaInstagram
                        className={
                          InstagramFeedStyle[
                            "instagram__window__item--header-icon"
                          ]
                        }
                      />
                      <Link
                        href="/"
                        className={
                          InstagramFeedStyle[
                            "instagram__window__item--header-label"
                          ]
                        }
                      >
                        <span>white_linen31</span>
                      </Link>
                      <button
                        className={
                          InstagramFeedStyle[
                            "instagram__window__item--header-btn-close"
                          ]
                        }
                      >
                        <FaRegWindowClose
                          onClick={handleCloseWindow}
                          style={{ cursor: "pointer" }}
                        />
                      </button>
                    </div>

                    <div
                      className={
                        InstagramFeedStyle["instagram__window__item-content"]
                      }
                    >
                      <p>{box.content}</p>
                    </div>
                    <p
                      className={
                        InstagramFeedStyle["instagram__window__item-view-date"]
                      }
                    >
                      {box.date}
                    </p>
                  </div>
                </div>
                <div className={InstagramFeedStyle["instagram__window-mobile"]}>
                  <div
                    className={
                      InstagramFeedStyle["instagram__window__item-img"]
                    }
                  >
                    <Image
                      src={box.scr}
                      alt={"Present for" + " " + box.alt}
                      width={1000}
                      height={1000}
                      className={InstagramFeedStyle["instagram__window-img"]}
                    />
                  </div>

                  <div
                    className={
                      InstagramFeedStyle["instagram__window__item--header"]
                    }
                  >
                    <FaInstagram
                      className={
                        InstagramFeedStyle[
                          "instagram__window__item--header-icon"
                        ]
                      }
                    />
                    <Link
                      href="/"
                      className={
                        InstagramFeedStyle[
                          "instagram__window__item--header-label"
                        ]
                      }
                    >
                      <span>white_linen31</span>
                    </Link>
                    <button
                      className={
                        InstagramFeedStyle[
                          "instagram__window__item--header-btn-close"
                        ]
                      }
                    >
                      <FaRegWindowClose
                        onClick={handleCloseWindow}
                        style={{ cursor: "pointer" }}
                      />
                    </button>
                  </div>

                  <div
                    className={
                      InstagramFeedStyle["instagram__window__item-content"]
                    }
                  >
                    <p>{box.content}</p>
                  </div>
                  <p
                    className={
                      InstagramFeedStyle["instagram__window__item-view-date"]
                    }
                  >
                    May 3, 2023
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className={InstagramFeedStyle["btn-control"]}>
            <button
              onClick={onNextBox}
              className={InstagramFeedStyle["btn-control-next"]}
            >
              <RxChevronLeft />
            </button>
            <button
              className={InstagramFeedStyle["btn-control-prev"]}
              onClick={onPrevBox}
            >
              <RxChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
