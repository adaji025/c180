import { Progress, Table } from "@mantine/core";
import React from "react";

interface IProps {
  name: string;
  album: number;
  photos: number;
  color: string;
}

const TopUsers = () => {
  const dummyData: IProps[] = [
    {
      name: "Leanne Graham",
      album: 87,
      photos: 46,
      color: "#FCB859",
    },
    {
      name: "Ervin Howell",
      album: 60,
      photos: 17,
      color: "#A9DFD8",
    },
    {
      name: "Clementine Bauch",
      album: 50,
      photos: 19,
      color: "#28AEF3",
    },
    {
      name: "Patricia Lebsack",
      album: 30,
      photos: 29,
      color: "#F2C8ED",
    },
  ];
  return (
    <div className="bg-primary px-5 py-7 rounded-[10px]  w-full mt-5">
      <div className="font-semibold mb-5">Top Users by Albums</div>
      <Table>
        <Table.Thead>
          <Table.Tr className="border-0 text-grayColor text-[13px">
            <Table.Th>#</Table.Th>
            <Table.Th>Name</Table.Th>
            <Table.Th>Photos</Table.Th>
            <Table.Th>
              <div className="flex justify-end">Albums</div>
            </Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {dummyData.map((item: IProps, i) => (
            <Table.Tr key={item.name} className="border-0 text-[10px]">
              <Table.Td>{i}</Table.Td>
              <Table.Td>{item.name}</Table.Td>
              <Table.Td>
                <Progress size="xs" color={item.color} value={item.album} />
              </Table.Td>
              <Table.Td>
                <div className="flex justify-end">
                  <button
                    style={{ borderColor: item.color, color: item.color }}
                    className={`p-1 min-w-[57px] border border-[${item.color}]  rounded-md`}
                  >
                    {item.photos}
                  </button>
                </div>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
};

export default TopUsers;
