import React from 'react'
import ConnectButton from '../connect-button'

function DisconnectedWallet() {
  return (
    <div>
      <div className="container h-[40vh] flex items-center justify-center">
        <div className='space-y-5 max-w-sm mx-auto relative z-10'>
          <div className="absolute left-0 right-0 bottom-0 top-0 z-0 flex items-center justify-center">
            <div className='w-56 h-20 blur-3xl rounded-full bg-white/60'>OK</div>
          </div>
          <div className='text-center relative z-10'>
            <h2 className='text-xl font-light text-[#FFF]'>Please connect your wallet</h2>
            <p className='text-xl font-light text-[#FFF]'>To get access to your dashboard</p>
            <div className='flex mt-4 justify-center items-center'>
              <ConnectButton label='Connect Now' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisconnectedWallet