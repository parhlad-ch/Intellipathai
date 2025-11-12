import React from 'react';

type ModuleTopic = {
  title: string;
};

type ModuleItemProps = {
  title: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  topics: ModuleTopic[];
  progress?: number; // Progress percentage (0-100)
};

const ModuleItem = ({ title, duration, difficulty, topics, progress = 0 }: ModuleItemProps) => {
  const getBadgeClass = () => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-success';
      case 'Intermediate':
        return 'bg-warning';
      case 'Advanced':
        return 'bg-danger';
      default:
        return 'bg-primary';
    }
  };

  const getProgressColor = () => {
    if (progress >= 75) return 'bg-success';
    if (progress >= 50) return 'bg-info';
    if (progress >= 25) return 'bg-warning';
    return 'bg-danger';
  };

  return (
    <div className="module-item mb-30">
      <div className="module-header p-3 d-flex align-items-center justify-content-between p-20">
        <div className="d-flex align-items-center">
          <span className="module-icon me-3">
            <i className="fa-solid fa-book"></i>
          </span>
          <div>
            <h5 className="module-title mb-0">{title}</h5>
            <span className="module-duration text-muted">{duration}</span>
          </div>
        </div>
        <span className={`badge ${getBadgeClass()}`}>{difficulty}</span>
      </div>
      <div className="module-topics ps-4 pe-4 pb-3">
        {topics.map((topic, index) => (
          <div key={index} className="topic-item d-flex align-items-center mb-15">
            <i className="fa-regular fa-circle-check me-2 text-success"></i>
            <span>{topic.title}</span>
          </div>
        ))}
      </div>
      
      {/* Progress Bar */}
      <div className="module-progress ps-4 pe-4 pb-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="progress-label">Progress</span>
          <span className="progress-percentage">{progress}%</span>
        </div>
        <div className="progress" style={{ height: '8px' }}>
          <div
            className={`progress-bar ${getProgressColor()}`}
            role="progressbar"
            style={{ width: `${progress}%` }}
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </div>
      </div>
    </div>
  );
};export default ModuleItem;
