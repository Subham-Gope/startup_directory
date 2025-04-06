import React from "react";

type props = {
  params: {
    id: string;
  };
};

const UserDetailsPage = async ({ params }: props) => {
  const { id } = await params;
  return (
    <div>
      <h1 className="text-3xl">UserDetailsPage: {id}</h1>
    </div>
  );
};

export default UserDetailsPage;
