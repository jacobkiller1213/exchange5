import {
  a as s,
  c as o,
  F as d,
  e as i,
  n as r,
  b as t,
  t as l,
} from "./Sm2mCfDE.js";
const n = ["autoplay-reverse-direction"],
  c = { class: "!min-h-full" },
  u = { class: "d-flex justify-between" },
  x = {
    __name: "Reviews",
    props: {
      leftToRight: { type: Boolean, default: !1 },
      list: { type: Array, default: () => [] },
      darkMode: { type: Boolean, default: !1 },
    },
    setup(e) {
      return (C, m) => (
        s(),
        o(
          "swiper-container",
          {
            "slides-per-view": "auto",
            "space-between": "10",
            loop: !0,
            "autoplay-delay": "0",
            "autoplay-disable-on-interaction": !1,
            "autoplay-reverse-direction": e.leftToRight,
            speed: "14000",
            class: "",
          },
          [
            (s(!0),
            o(
              d,
              null,
              i(
                e.list,
                (a) => (
                  s(),
                  o(
                    "swiper-slide",
                    {
                      key: a.id,
                      class: r([
                        "w-96 min-h-44 p-6 !rounded-xl shadow-xs border hidden",
                        e.darkMode
                          ? "bg-[#1c1c20] !border-[#434343]"
                          : "bg-gray-100 !border-gray-300",
                      ]),
                    },
                    [
                      t("div", c, [
                        t("div", u, [
                          t(
                            "div",
                            {
                              class: r([
                                "text-md-regular",
                                e.darkMode ? "text-[#CCCCCC]" : "text-gray-900",
                              ]),
                            },
                            l(a.title),
                            3
                          ),
                          t(
                            "div",
                            {
                              class: r([
                                "text-md-regular",
                                e.darkMode ? "text-[#CCCCCC]" : "text-gray-600",
                              ]),
                            },
                            l(a.date),
                            3
                          ),
                        ]),
                        t(
                          "p",
                          {
                            class: r([
                              "mt-2 text-md-medium",
                              e.darkMode ? "text-[#CCCCCC]" : "text-gray-600",
                            ]),
                          },
                          l(a.comment),
                          3
                        ),
                      ]),
                    ],
                    2
                  )
                )
              ),
              128
            )),
          ],
          8,
          n
        )
      );
    },
  };
export { x as _ };
