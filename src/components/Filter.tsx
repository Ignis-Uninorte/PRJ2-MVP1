import React from 'react';
import '../styles/filter.css';
import { useFilters } from '../hooks/useFilters'; // Import your hook
import LoadingSpinner from './Spinner';  // Import the spinner component
import ErrorComponent from './Error';    // Import the error component

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
  categoria: string;  // We only need the category as the prop
}

const Filter: React.FC<FilterComponentProps> = ({ categoria }) => {
  const { data: filtersData, isLoading, isError } = useFilters();  // Use the hook to fetch data

  if (isLoading) {
    return <LoadingSpinner />;  // Show spinner while loading
  }

  if (isError) {
    return <ErrorComponent message="Error loading filters." />; // Show error message if any
  }

  // Ensure filtersData is defined and access the relevant category's filters
  const sections: FilterSection[] = filtersData?.[categoria] || [];

  return (
    <aside className="filters-plp">
      <h2>Filters</h2>
      <ul>
        {sections.map((section: FilterSection, index: number) => (
          <li key={index}>
            <form>
              <h4>{section.title}</h4>
              {section.options.map((option: FilterOption, i: number) => (
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
