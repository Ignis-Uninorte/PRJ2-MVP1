import React from 'react';
import '../styles/filter.css';



interface FilterOption {
  label: string;
  count: number;
  id: string;
}

interface FilterSection {
  title: string;
  options: FilterOption[];
}

interface FilterComponentProps {
  sections: FilterSection[];
}


//ESTE ES EL ARRAY QUE HAY QUE PASAR 
// const filtersData = [
//     {
//       title: "Brands",
//       options: [
//         { label: "Samsung", count: 30, id: "samsung" },
//         { label: "Apple", count: 10, id: "apple" },
//         { label: "Lenovo", count: 20, id: "lenovo" },
//         { label: "Intel", count: 20, id: "intel" },
//         { label: "Amazon", count: 15, id: "amazon" },
//         { label: "COOPERS", count: 5, id: "coopers" },
//       ],
//     },
//     {
//       title: "Condition",
//       options: [
//         { label: "New", count: 50, id: "new" },
//         { label: "Renewed", count: 30, id: "renewed" },
//         { label: "Used", count: 20, id: "used" },
//       ],
//     },
//     {
//       title: "Memory Storage Capacity",
//       options: [
//         { label: "8GB", count: 5, id: "8gb" },
//         { label: "16GB", count: 15, id: "16gb" },
//         { label: "32GB", count: 40, id: "32gb" },
//         { label: "64GB & Above", count: 40, id: "64above" },
//       ],
//     },
//     {
//       title: "Tablet Display Size",
//       options: [
//         { label: "Under 7 Inches", count: 5, id: "under7" },
//         { label: "7 to 8.9 Inches", count: 10, id: "789" },
//         { label: "9 to 9.9 Inches", count: 10, id: "999" },
//         { label: "10 to 10.9 Inches", count: 15, id: "10109" },
//         { label: "11 Inches & Above", count: 60, id: "11above" },
//       ],
//     },
//     {
//       title: "Tablet Operating System",
//       options: [
//         { label: "Android", count: 70, id: "android" },
//         { label: "iOS", count: 10, id: "ios" },
//         { label: "Windows", count: 20, id: "windows" },
//       ],
//     },
//   ];
  



const FilterComponent: React.FC<FilterComponentProps> = ({sections}) => {
  return (
    <aside className="filters-plp">
      <h2>Filters</h2>
      <ul>
        {sections.map((section, index) => (
          <li key={index}>
            <form>
              <h4>{section.title}</h4>
              {section.options.map((option, i) => (
                <label key={i}>
                  <input id={option.id} type="checkbox" />
                  {option.label}
                  <p className="count">({option.count})</p>
                </label>
              ))}
            </form>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default FilterComponent;
