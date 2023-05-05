import styled from 'styled-components';
import {LoginSwitchProps} from "@/interfaces/interfaces";

const SwitchWrapper = styled.div`
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .switch-field {
    width: 345px;
    overflow: hidden;
  }

  .switch-bg {
    margin: 0 auto;
    border-radius: 5px;
    width: 288px;
    height: 32px;
    background-color: #fbaf85;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .switch-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 12px;
  }

  .switch-field input {
    position: absolute !important;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    width: 1px;
    border: 0;
    overflow: hidden;
  }

  .switch-field label {
    display: inline-block;
    width: 142px;
    height: 28px;
    background-color: #fbaf85;
    color: #FFF;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    text-shadow: none;
    padding: 6px 14px;
    transition: all 0.1s ease-in-out;

  }

  .switch-field label:hover {
    cursor: pointer;
  }

  .switch-field input:checked + label {
    background-color: #D87D4A;
  }

  .switch-field label:first-of-type {
    border-radius: 5px;
  }

  .switch-field label:last-of-type {
    border-radius: 5px;
  }
`

const LoginSwitch = ({register, setRegister}: LoginSwitchProps) => {
    return (
        <SwitchWrapper>
            <form className="switch-field">
                <h2 className="switch-title">Account</h2>
                <div className="switch-bg">
                    <input
                        type="radio"
                        id="switch_left"
                        name="switchToggle"
                        value="Sign in"
                        onChange={() => setRegister(false)}
                        checked={!register}
                    />
                    <label htmlFor="switch_left">Sign in</label>
                    <input
                        type="radio"
                        id="switch_right"
                        name="switchToggle"
                        value="Register"
                        onChange={() => setRegister(true)}
                        checked={register}
                    />
                    <label htmlFor="switch_right">Register</label>
                </div>

            </form>
        </SwitchWrapper>
    )
}

export default LoginSwitch