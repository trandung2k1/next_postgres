import React from 'react';
export async function generateStaticParams() {
  const rs = await fetch(`${process.env.BASE_URL}/api/comments`);
  const result = await rs.json();
  return result.map((i: any) => ({
    id: `${i.id}`,
  }));
  // return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  // getStaticProps with the revalidate
  const revalidatedData = await fetch(`${process.env.BASE_URL}/api/comments/${id}`, {
    next: { revalidate: 10 },
  });
  // getStaticProps
  // const staticData = await fetch(`${process.env.BASE_URL}/api/comments/${id}`, {
  //   cache: 'force-cache',
  // });
  const data = await revalidatedData.json();
  // console.log(data);
  return (
    <div>
      <h1>Name: {data?.name}</h1>
      <p>Content: {data?.content}</p>
    </div>
  );
};

export default Page;
