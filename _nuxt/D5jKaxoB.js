import { P as o, v as r, bo as l, bp as s } from "./Sm2mCfDE.js";
import { d } from "./D_iu627J.js";
const m = o("exchangeBox", {
  state: () => ({
    calculateData: null,
    directionInfo: null,
    currentDirectStep: null,
    order: null,
    memo: null,
    receiveDynamicFields: [],
    sendDynamicFields: [],
    shouldCache: 0,
    rate: 0,
    userInfo: null,
    side: null,
  }),
  actions: {
    disableCache() {
      this.shouldCache++;
    },
    updateUserInfo(e) {
      this.userInfo = e;
    },
    updateCalculateData(e) {
      this.calculateData = { ...this.calculateData, ...e };
    },
    updateDirectionInfo(e) {
      this.directionInfo = e;
    },
    updateDirectionCurrentStep(e) {
      this.currentDirectStep = e;
    },
    storeReferralCode(e) {
      localStorage.setItem("xch_referral", e);
    },
    updateCalculateSide(e) {
      this.side = e;
    },
    clearReferralCode() {
      localStorage.removeItem("xch_referral");
    },
    updateInvoice(e) {
      this.invoice = e;
    },
    updateOrder(e) {
      var i;
      (this.order = e),
        (i = e.calculation) != null &&
          i.details &&
          this.updateCalculateData(e.calculation.details);
    },
    scrollToTop() {
      window.scrollTo({ top: 100, behavior: "smooth" });
    },
    updateSendDynamicFields(e) {
      this.sendDynamicFields = e;
    },
    clearStats() {
      (this.calculateData = null),
        (this.directionInfo = null),
        (this.currentDirectStep = null),
        (this.invoice = null),
        (this.userInfo = null),
        (this.order = null),
        (this.memo = null);
    },
    updateReceiveDynamicFields(e) {
      const i = e.filter((a) => a.is_transaction === 1),
        t = e.filter((a) => a.is_transaction === 0);
      (this.userInfo = t ?? []), (this.receiveDynamicFields = i ?? []);
    },
    updateMemo(e) {
      if (e && e.length > 0) {
        const i = e.find((t) =>
          Object.prototype.hasOwnProperty.call(t, "cryptoMemoQR")
        );
        this.memo = i ?? null;
      }
    },
    async trackOrder(e) {
      try {
        const { data: i } = await r(l, {
            method: "POST",
            body: { track_id: e },
          }),
          t = i.value.data,
          a = t.calculationDetails;
        (a.sendCurrency = t.direction.send_currency),
          (a.receiveCurrency = t.direction.receive_currency),
          (t.track_id = e),
          (this.rate = t.direction.direction_rate),
          this.updateOrder(t),
          this.updateCalculateData(a),
          this.updateSendDynamicFields(t.sendDynamicFields ?? []),
          this.updateMemo(t.sendDynamicFields ?? []),
          this.updateReceiveDynamicFields(t.receiveDynamicFields ?? []),
          this.updateDirectionCurrentStep(d.PAY_ORDER);
      } catch (i) {
        throw i;
      }
    },
    async submitGatewayForm(e, i) {
      try {
        await r(s, { method: "POST", body: e });
      } catch (c) {
        throw c;
      }
      const t = Object.assign({}, i);
      delete t.FORM_ACTION, delete t.FORM_METHOD;
      const a = document.createElement("form");
      (a.method = i.FORM_METHOD), (a.action = i.FORM_ACTION);
      for (const c in t)
        if (Object.prototype.hasOwnProperty.call(t, c)) {
          const n = document.createElement("input");
          (n.type = "hidden"), (n.name = c), (n.value = t[c]), a.appendChild(n);
        }
      document.body.appendChild(a), a.submit();
    },
  },
});
export { m as u };
