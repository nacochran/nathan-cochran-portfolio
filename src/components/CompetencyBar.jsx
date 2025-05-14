import PropTypes from 'prop-types';

const CompetencyBar = ({ competency }) => {
  const percentage = (competency / 10) * 100;

  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-xs text-gray-400">
        proficiency: {competency}/10
      </span>
      <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500 transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

CompetencyBar.propTypes = {
  competency: PropTypes.number.isRequired
};

export default CompetencyBar; 