import type { Metadata } from 'next';
import { ArrowDownRight, ArrowUpRight, CreditCard, User, TrendingDown, Zap } from 'lucide-react';

import { Container } from '@/components/salient/Container';
import { Button } from '@/components/salient/Button';
import { ChurnChart } from '@/components/dashboard/ChurnChart';
import { RevenueChart } from '@/components/dashboard/RevenueChart';

const stats = [
  {
    name: 'Monthly Recurring Revenue',
    value: '$72,000',
    change: '+12.5%',
    positive: true,
    icon: CreditCard,
  },
  {
    name: 'Active Users',
    value: '3,456',
    change: '+8.3%',
    positive: true,
    icon: User,
  },
  {
    name: 'Churn Rate',
    value: '2.1%',
    change: '-0.8%',
    positive: false,
    icon: TrendingDown,
  },
  {
    name: 'Average LTV',
    value: '$2,400',
    change: '+5.2%',
    positive: true,
    icon: Zap,
  },
];

const recentAccounts = [
  { company: 'Acme Analytics', owner: 'Helena Ortiz', plan: 'Growth', mrr: '$1,400', status: 'Active' },
  { company: 'Nimbus Labs', owner: 'Aaron Paul', plan: 'Scale', mrr: '$2,250', status: 'Active' },
  { company: 'Polaris Capital', owner: 'Priya Patel', plan: 'Enterprise', mrr: '$4,600', status: 'Trial' },
  { company: 'Vertex Studio', owner: 'Logan Chen', plan: 'Starter', mrr: '$750', status: 'Churned' },
];

export const metadata: Metadata = {
  title: 'Dashboard | BlogAI',
  description:
    'Track revenue, customers, retention, and product usage after logging in to the BlogAI platform.',
};

function StatCard({
  name,
  value,
  change,
  positive,
  icon: Icon,
}: (typeof stats)[number]) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{name}</p>
          <p className="mt-2 text-2xl font-semibold text-slate-900">{value}</p>
        </div>
        <span className="inline-flex size-12 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
          <Icon className="size-6" />
        </span>
      </div>
      <div className="mt-4 flex items-center text-sm font-medium">
        {positive ? (
          <ArrowUpRight className="mr-1.5 size-4 text-emerald-500" />
        ) : (
          <ArrowDownRight className="mr-1.5 size-4 text-rose-500" />
        )}
        <span className={positive ? 'text-emerald-600' : 'text-rose-600'}>{change}</span>
        <span className="ml-2 text-slate-500">vs last month</span>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <main className="bg-slate-50 py-12">
      <Container>
        <div className="space-y-10">
          <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">Analytics</p>
              <h1 className="mt-2 text-3xl font-semibold text-slate-900">SaaS Performance Overview</h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-500">
                Monitor how your product is performing across revenue, retention, and acquisition metrics.
                Use these insights to prioritize roadmap decisions and celebrate wins with your team.
              </p>
            </div>
            <Button href="#" color="blue">
              Download report
            </Button>
          </header>

          <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.name} {...stat} />
            ))}
          </section>

          <section className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">Monthly Recurring Revenue</h2>
                  <p className="text-sm text-slate-500">See how your subscription revenue grows over time.</p>
                </div>
                <Button href="#" variant="outline" color="slate">
                  View details
                </Button>
              </div>
              <div className="mt-6">
                <RevenueChart />
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">Customer Churn</h2>
                  <p className="text-sm text-slate-500">Track cancellations and retention to maintain growth.</p>
                </div>
                <Button href="#" variant="outline" color="slate">
                  Compare cohorts
                </Button>
              </div>
              <div className="mt-6">
                <ChurnChart />
              </div>
            </article>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 px-6 py-4">
              <h2 className="text-lg font-semibold text-slate-900">Recent Accounts</h2>
              <p className="text-sm text-slate-500">Stay on top of new customers joining the platform.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                <thead className="bg-slate-50 text-slate-500">
                  <tr>
                    <th scope="col" className="px-6 py-3 font-medium">Company</th>
                    <th scope="col" className="px-6 py-3 font-medium">Account Owner</th>
                    <th scope="col" className="px-6 py-3 font-medium">Plan</th>
                    <th scope="col" className="px-6 py-3 font-medium">MRR</th>
                    <th scope="col" className="px-6 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {recentAccounts.map((account) => (
                    <tr key={account.company}>
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-slate-900">
                        {account.company}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-slate-600">{account.owner}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-slate-600">{account.plan}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-slate-600">{account.mrr}</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <span
                          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                            account.status === 'Active'
                              ? 'bg-emerald-100 text-emerald-700'
                              : account.status === 'Trial'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-rose-100 text-rose-700'
                          }`}
                        >
                          {account.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
