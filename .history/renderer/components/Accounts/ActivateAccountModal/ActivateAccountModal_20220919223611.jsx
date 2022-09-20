import React from 'react';

export default function ActivateAccountModal({ activateSuccessAction, selectedValues }) {
    const rest = new Rest();

    const handleSubmit = () => {
        rest.activate(
            `${INITIAL_URL}/account/activate`,
            { 'accountUsernameListDto' : selectedValues.map((item) => item.accountUsername)},
            activateSuccessAction,
            `Successfully activated ${selectedValues.length} account/s`
        )
    }

  return (
    <div>ActivateAccountModal</div>
  )
}
