import React, { useMemo } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowDownRight,
  ArrowUpRight,
  HandHeart,
  Home,
  LogOut,
  Users,
  Wallet,
} from "lucide-react";
import { Button } from "Components/ui/button.jsx";
import {
  members,
  transactions,
  volunteers,
} from "data/adminDashboardData";
import { getCurrentAdmin, logoutAdmin } from "lib/adminAuth";

const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);

const AdminDashboard = () => {
  const navigate = useNavigate();
  const admin = getCurrentAdmin();

  const stats = useMemo(() => {
    const totalCredits = transactions
      .filter((transaction) => transaction.type === "Credit")
      .reduce((sum, transaction) => sum + transaction.amount, 0);

    const totalDebits = transactions
      .filter((transaction) => transaction.type === "Debit")
      .reduce((sum, transaction) => sum + transaction.amount, 0);

    const activeVolunteers = volunteers.filter(
      (volunteer) => volunteer.status === "Active",
    ).length;

    return {
      totalCredits,
      totalDebits,
      netBalance: totalCredits - totalDebits,
      activeVolunteers,
    };
  }, []);

  const handleLogout = () => {
    logoutAdmin();
    navigate("/admin/signin", { replace: true });
  };

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Yashashvi Foundation</title>
      </Helmet>

      <div className="min-h-screen bg-slate-50">
        <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm text-slate-500">Admin Panel</p>
              <h1 className="text-2xl font-bold text-slate-900 font-serif">
                NGO Operations Dashboard
              </h1>
              <p className="text-sm text-slate-600 mt-1">
                Signed in as {admin?.fullName || "Admin"}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button asChild variant="outline" className="border-slate-300">
                <Link to="/">
                  <Home size={16} className="mr-2" /> Website
                </Link>
              </Button>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="border-red-200 text-red-700 hover:bg-red-50"
              >
                <LogOut size={16} className="mr-2" /> Logout
              </Button>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 space-y-8">
          <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <p className="text-sm text-slate-500">Active Volunteers</p>
              <p className="text-3xl font-bold text-slate-900 mt-2">
                {stats.activeVolunteers}
              </p>
              <p className="text-xs text-emerald-700 mt-2">Total listed: {volunteers.length}</p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <p className="text-sm text-slate-500">Team Members</p>
              <p className="text-3xl font-bold text-slate-900 mt-2">{members.length}</p>
              <p className="text-xs text-slate-600 mt-2">Core NGO team</p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <p className="text-sm text-slate-500">Incoming Funds</p>
              <p className="text-2xl font-bold text-emerald-700 mt-2">
                {formatCurrency(stats.totalCredits)}
              </p>
              <p className="text-xs text-slate-600 mt-2">Credits recorded</p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <p className="text-sm text-slate-500">Net Balance</p>
              <p className="text-2xl font-bold text-sky-700 mt-2">
                {formatCurrency(stats.netBalance)}
              </p>
              <p className="text-xs text-slate-600 mt-2">Credits - Debits</p>
            </div>
          </section>

          <section className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-200 flex items-center gap-2">
                <HandHeart className="text-emerald-600" size={18} />
                <h2 className="text-lg font-semibold text-slate-900">Volunteers</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50 text-slate-500">
                    <tr>
                      <th className="text-left px-5 py-3">Name</th>
                      <th className="text-left px-5 py-3">Focus</th>
                      <th className="text-left px-5 py-3">Hours</th>
                      <th className="text-left px-5 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {volunteers.map((volunteer) => (
                      <tr key={volunteer.id} className="border-t border-slate-100">
                        <td className="px-5 py-3 font-medium text-slate-900">{volunteer.name}</td>
                        <td className="px-5 py-3 text-slate-600">{volunteer.focusArea}</td>
                        <td className="px-5 py-3 text-slate-600">{volunteer.hoursThisMonth}</td>
                        <td className="px-5 py-3">
                          <span
                            className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                              volunteer.status === "Active"
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-amber-100 text-amber-700"
                            }`}
                          >
                            {volunteer.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-200 flex items-center gap-2">
                <Users className="text-sky-700" size={18} />
                <h2 className="text-lg font-semibold text-slate-900">Members</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50 text-slate-500">
                    <tr>
                      <th className="text-left px-5 py-3">Name</th>
                      <th className="text-left px-5 py-3">Role</th>
                      <th className="text-left px-5 py-3">Department</th>
                      <th className="text-left px-5 py-3">Joined</th>
                    </tr>
                  </thead>
                  <tbody>
                    {members.map((member) => (
                      <tr key={member.id} className="border-t border-slate-100">
                        <td className="px-5 py-3 font-medium text-slate-900">{member.name}</td>
                        <td className="px-5 py-3 text-slate-600">{member.role}</td>
                        <td className="px-5 py-3 text-slate-600">{member.department}</td>
                        <td className="px-5 py-3 text-slate-600">{new Date(member.joinedOn).toLocaleDateString("en-US")}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Wallet className="text-violet-700" size={18} />
                <h2 className="text-lg font-semibold text-slate-900">Transactions</h2>
              </div>
              <p className="text-sm text-slate-500">{transactions.length} entries</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-slate-500">
                  <tr>
                    <th className="text-left px-5 py-3">Date</th>
                    <th className="text-left px-5 py-3">Source / Purpose</th>
                    <th className="text-left px-5 py-3">Type</th>
                    <th className="text-left px-5 py-3">Amount</th>
                    <th className="text-left px-5 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <tr key={transaction.id} className="border-t border-slate-100">
                      <td className="px-5 py-3 text-slate-600">
                        {new Date(transaction.date).toLocaleDateString("en-US")}
                      </td>
                      <td className="px-5 py-3 font-medium text-slate-900">{transaction.source}</td>
                      <td className="px-5 py-3">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${
                            transaction.type === "Credit"
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-rose-100 text-rose-700"
                          }`}
                        >
                          {transaction.type === "Credit" ? (
                            <ArrowUpRight size={12} />
                          ) : (
                            <ArrowDownRight size={12} />
                          )}
                          {transaction.type}
                        </span>
                      </td>
                      <td className="px-5 py-3 font-semibold text-slate-900">
                        {formatCurrency(transaction.amount)}
                      </td>
                      <td className="px-5 py-3">
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                            transaction.status === "Completed"
                              ? "bg-sky-100 text-sky-700"
                              : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {transaction.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default AdminDashboard;
