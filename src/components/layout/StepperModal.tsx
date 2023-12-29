import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Modal from '@mui/material/Modal';
import { ReactNode } from 'react';

const steps = [
  'Select master blaster campaign settings',
  'Create an ad group',
  'Create an ad',
];


const StepperModal = ({ open, action, children }: { open: boolean, action: any, children: ReactNode }) => {

  return (
    <>
      <Modal
        open={open}
        onClose={() => action(false)}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <div className='border border-red-400 w-[690px] h-[670px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-4'>
          <Stepper activeStep={1} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
      </Modal>
      {children}
    </>

  )
}

export default StepperModal