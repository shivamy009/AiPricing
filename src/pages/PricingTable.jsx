import React from 'react';

const PricingTable = () => {
  return (
    <div className=" p-6 min-h-screen  bg-black">
      <div className="max-w-4xl mx-auto  p-8 rounded-lg shadow-lg bg-blue-950 text-white">
        <h1 className="text-3xl font-bold mb-4">API Pricing</h1>
        <p className="mb-6">Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:</p>
        
        <table className="w-full table-auto mb-6 ">
          <thead className=''>
            <tr className="bg-blue-900">
              <th className="px-4 py-2">API</th>
              <th className="px-4 py-2">MODEL</th>
              <th className="px-4 py-2">PRICE PER 1K TOKENS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">OpenAI</td>
              <td className="border px-4 py-2">GPT-3.5</td>
              <td className="border px-4 py-2">$0.002</td>
            </tr>
            <tr className=" bg-blue-950">
              <td className="border px-4 py-2">OpenAI</td>
              <td className="border px-4 py-2">GPT-4</td>
              <td className="border px-4 py-2">$0.03</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Together AI</td>
              <td className="border px-4 py-2">Llama-2-70b</td>
              <td className="border px-4 py-2">$0.0008</td>
            </tr>
            <tr className=" bg-blue-950">
              <td className="border px-4 py-2">Together AI</td>
              <td className="border px-4 py-2">Llama-2-13b</td>
              <td className="border px-4 py-2">$0.0006</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-2xl font-bold mb-4">Token Estimation</h2>
        <p className="mb-6">On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.</p>

        <h2 className="text-2xl font-bold mb-4">Billing</h2>
        <p>You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.</p>
      </div>
    </div>
  );
};

 

export default PricingTable;
