import React from 'react';
export async function generateStaticParams() {
  // const rs = await fetch('http://localhost:3000/api/comments');
  // const result = await rs.json();
  // return result.map((i: any) => ({
  //   id: `${i.id}`,
  // }));
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  // getStaticProps with the revalidate
  // const revalidatedData = await fetch(``, {
  //   next: { revalidate: 10 },
  // });

  // getStaticProps
  // const staticData = await fetch(`https://...`, { cache: 'force-cache' });
  return <div>Page</div>;
};

export default Page;
