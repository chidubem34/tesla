export default function TransactionsPage() {
  return (
    <div className="min-h-screen bg-[#050505] px-4 py-3 text-white sm:px-6 md:px-10 lg:px-14">
      <div className="mx-auto max-w-6xl space-y-8">
        <section className="rounded-4xl border border-white/10 bg-white/5 p-6 sm:p-8 lg:p-10">
          <h1 className="text-lg font-bold sm:text-xl lg:text-2xl">
            Your Transactions
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-gray-300 sm:text-base">
            View your recent transactions and manage your portfolio effectively.
          </p>
        </section>
        <section>
          <div className="bg-white/10 border border-[#E5E7EB] rounded-xl p-6 shadow-lg">
            <p className="text-sm text-gray-300">No transactions to display.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
