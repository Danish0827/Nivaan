import React from 'react';
import { ComparisonTableData } from '@/app/api/data';
import { rubikBold, rubikSemiBolder } from '@/app/fonts';
import Image from 'next/image';
import { ComparisonTableDataType } from '@/app/api/allTypes';

interface ComparisonTableProps {
  data?: ComparisonTableDataType[];

}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ data}) => {
  const tableData = data || (ComparisonTableData);

  return (
    <div className="p-4">
      <table className="text-left table-auto">
        <thead>
          <tr className={`${rubikBold.className} text-[10px] md:text-[25px] md:leading-[29.63px]`}>
            <th className="p-4 text-center">Advantages</th>
            <th className="py-4 px-8 bg-[#EAF1FB] text-[#2F438F] text-center rounded-t-[0.625rem]">Nivaan Pain <br/>Clinics</th>
            <th className="p-4 text-center">Other Clinics /Hospitals</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <React.Fragment key={index}>
              <tr>
                <td className={`${rubikSemiBolder.className} py-4 px-4 md:px-16 text-[#5F5F5F] uppercase text-left text-[10px] md:text-2xl`}>{item.advantage}</td>
                <td className={`py-4 px-4 bg-[#EAF1FB] ${index === tableData.length - 1 ? 'rounded-b-[0.625rem]' : ''}`}>
                  <Image src={item.nivaan ? require('../../public/right_icon.webp') : require('../../public/wrong_icon.webp')} alt={item.nivaan ? 'Right Tick' : 'Wrong Cross'} className="w-8 h-8 md:w-14 md:h-14 mx-auto" unoptimized/>
                </td>
                <td className="py-4 px-4">
                  <Image src={item.other ? require('../../public/right_icon.webp') : require('../../public/wrong_icon.webp')} alt={item.other ? 'Right Tick' : 'Wrong Cross'} className="w-5 h-5 md:w-10 md:h-10 mx-auto" unoptimized />
                </td>
              </tr>
              {index < tableData.length - 1 && (
                <tr>
                  <td colSpan={3} className="border-t border-[#B3B3B3]" />
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
