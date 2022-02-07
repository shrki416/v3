import Layout from '../components/Layout';
import Link from 'next/link';

export default function Success() {
  return (
    <Layout>
      <div className="mt-5 text-gray-600 text-2xl font-mono">
        🎉 Form successfully submitted!
      </div>
      <Link href="/">
        <a className="bg-red-500 text-xl rounded-md px-2 py-1 inline-block text-gray-50 mt-3">
          &larr; Go back
        </a>
      </Link>
    </Layout>
  );
}
