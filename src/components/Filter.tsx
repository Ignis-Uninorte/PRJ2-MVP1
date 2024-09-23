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
  filtersData: { [key: string]: FilterSection[] };
  categoria: string;
}

const Filter: React.FC<FilterComponentProps> = ({ filtersData, categoria }) => {
  const sections = filtersData[categoria] || [];

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

export default Filter;