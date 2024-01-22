import Stepper, { Controller, MainContent, Meta, Numbering } from "Stepper";
import Button from "elements/Button";
import ItemDetails from "json/itemDetails.json";
import Bookinginformation from "parts/Checkout/BookingInformation";
import Completed from "parts/Checkout/Completed";
import Payment from "parts/Checkout/Payment";
import Header from "parts/Header";
import { Component } from "react";
import { Fade } from "react-reveal";

export default class CheckOut extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      proofPayment: "",
      bankName: "",
      bankHolder: "",
    },
  };

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    const { data } = this.state;
    const checkout = {
      duration: 3,
    };

    const steps = {
      bookingInformation: {
        title: "Booking Information",
        description: "Please fill up the blank fields below",
        content: <Bookinginformation data={data} checkout={checkout} ItemDetails={ItemDetails} onChange={this.onChange} />,
      },
      payment: {
        title: "Payment",
        description: "Kindly follow the instructions below",
        content: <Payment data={data} ItemDetails={ItemDetails} checkout={checkout} onChange={this.onChange} />,
      },
      completed: {
        title: "Yay! Completed",
        description: null,
        content: <Completed />,
      },
    };

    return (
      <>
        <Header isCentered />
        <Stepper steps={steps}>
          {(prevStep, nextStep, CurrentStep, steps) => (
            <>
              <Numbering data={steps} current={CurrentStep} style={{ marginBottom: 50 }} />
              <Meta data={steps} current={CurrentStep} />
              <MainContent data={steps} current={CurrentStep} />
              {CurrentStep === "bookingInformation" && (
                <Controller>
                  {data.firstName !== "" && data.lastName !== "" && data.email !== "" && data.phone !== "" && (
                    <Fade>
                      <Button className=" btn mb-3" type="button" isBlock isPrimary hasShadow onClick={nextStep}>
                        Continue to Book
                      </Button>
                    </Fade>
                  )}
                  <Button className=" btn " type="link" isBlock isLight href={`/properties/${ItemDetails._id}`} onClick={prevStep}>
                    Cancel
                  </Button>
                </Controller>
              )}
              {CurrentStep === "payment" && (
                <Fade>
                  <Controller>
                    {data.proofPayment !== "" && data.bankName !== "" && data.bankHolder !== "" && (
                      <Fade>
                        <Button className=" btn mb-3" type="button" isBlock isPrimary hasShadow onClick={nextStep}>
                          Continue to Book
                        </Button>
                      </Fade>
                    )}
                    <Button className=" btn " type="button" isBlock isLight onClick={prevStep}>
                      Cancel
                    </Button>
                  </Controller>
                </Fade>
              )}

              {CurrentStep === "completed" && (
                <Controller>
                  <Button className="btn px-5" type="link" isPrimary hasShadow href="">
                    Back to Home
                  </Button>
                </Controller>
              )}
            </>
          )}
        </Stepper>
      </>
    );
  }
}
