import InputFile from "elements/Form/InputFile";
import InputText from "elements/Form/InputText";
import { Fade } from "react-reveal";
import logoBca from "../../assets/images/logo-bca.jpg";
import logoMandiri from "../../assets/images/logo-mandiri.jpg";

export default function Payment(props) {
  const { data, ItemDetails, checkout } = props;
  const tax = 10;
  const subTotal = ItemDetails.price * checkout.duration;
  const grandtotal = (subTotal * tax) / 100 + subTotal;
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row align-items-center justify-content-center">
          <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <p className="mb-4">Transfer Pembayaran:</p>
              <p>Tax:{tax}%</p>
              <p>Sub Total: ${subTotal} USD</p>
              <p>Total: ${grandtotal} USD</p>
              <div className="row mt-4">
                <div className="col-3 text-right">
                  <img src={logoBca} alt="bank central asia" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Central Asia</dd>
                    <dd>2208 1996</dd>
                    <dd>BuiltWith Angga</dd>
                  </dl>
                </div>
              </div>
              <div className="row">
                <div className="col-3 text-right">
                  <img src={logoMandiri} alt="bank mandiri" width={60} />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Mandiri</dd>
                    <dd>2208 1996</dd>
                    <dd>BuiltWith Angga</dd>
                  </dl>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
              <label htmlFor="proofPayment">Upload Bukti Transfer</label>
              <InputFile accept="image/*" id="proofPayment" name="proofPayment" value={data.proofPayment} onChange={props.onChange} />

              <label htmlFor="bankName">Asal Bank</label>
              <InputText id="bankName" name="bankName" type="text" value={data.bankName} onChange={props.onChange} />

              <label htmlFor="bankHolder">Nama Pengirim</label>
              <InputText id="bankHolder" name="bankHolder" type="text" value={data.bankHolder} onChange={props.onChange} />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
