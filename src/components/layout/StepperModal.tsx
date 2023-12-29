import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Modal from '@mui/material/Modal';
import { ReactNode } from 'react';

const steps = [
  'Select campaign settings',
  'Create an ad group',
  'Create an ad',
];


const StepperModal = ({ open, action, children }: { open: boolean, action: any, children: ReactNode }) => {

  return (
    <>
      <Modal
        open={open}
        onClose={() => action(false)}
      >
        <div className='w-[690px] h-[670px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-4 bg-[#474747] rounded-2xl'>
          <h1 className='font-semibold text-3xl text-white text-center my-8'>Create new project</h1>
          <Stepper activeStep={1} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div className='w-full'>

          </div>
        </div>
      </Modal>
      {children}
    </>

  )
}

export default StepperModal