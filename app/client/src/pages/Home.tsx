import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import axios from 'axios';
import { BASE_URL } from '../utils/index';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setUser } from '../redux/slice/UserSlice';

const HealthDashboard = () => {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      message: "You've exceeded 50,000 steps today. Rest is important to avoid overexertion and muscle fatigue.",
      isRead:false,
      type: 'success',
    },
    {
      id: 2,
      message: "Your hydration is below target. Consider drinking more water today.",
      isRead:false,
      type: 'warning',
    },
  ]);
  const [goals, setGoals] = useState([
    { title: 'Hydration', percentage: 40, subtitle: 'Drink 12 glasses of water' },
    { title: 'Steps', percentage: 70, subtitle: 'Walk 8000 steps' },
    { title: 'Sleep', percentage: 35, subtitle: 'Get 8 hrs of sleep' },
  ]);
  const [token, setToken] = useState('');
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.userState);

  useEffect(() => {
    setToken(localStorage.getItem('token') || '');
  }, []);

  useEffect(() => {
    const handleGetUserData = async () => {
      if (token) {
        try {
          const response = await axios.get(`${BASE_URL}/api/v1/user/getInfo`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          dispatch(setUser(response.data.user));
        } catch (e) {
          console.error(e);
        }
      }
    };

    handleGetUserData();
  }, [token, dispatch]);

  const handleDelete = (id: number) => {
    setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id));
  };

  const calculatePercentage = (current: number, target: number) =>
    Math.min(Math.round((current / target) * 100), 100);

  const hydrationPercentage = calculatePercentage(
    userState?.user?.details?.hydration || 0,
    3000
  );
  const stepsPercentage = calculatePercentage(
    userState?.user?.details?.steps || 0,
    8000
  );
  const sleepPercentage = calculatePercentage(
    userState?.user?.details?.sleepCycle || 0,
    8
  );

  return (
    <div className="w-[80%] p-3 justify-center flex-col mx-auto items-center">
      {/* Header Section */}
      <div className="mb-4 mt-8">
        <span className="text-[35px] font-semibold">
          Welcome, {userState?.user?.name || 'Guest'}
        </span>
        <p className="text-gray-600 font-light italic text-[18px]">
          Everything looks good, keep hydrating.
        </p>
      </div>

      {/* Goals Section */}
      <div className="mb-8">
        <h2 className="text-[25px] mb-4 font-normal">Your Daily Goals</h2>
        <div className="flex gap-10">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="shadow-lg shadow-gray-500 py-4 px-3 rounded-lg border w-[300px] border-gray-600 border-opacity-25"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-lg">{goal.title}</span>
                <span className="font-medium">{goal.percentage}%</span>
              </div>
              <p className="text-sm text-gray-600">{goal.subtitle}</p>
              <div className="mt-2 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#D6FF64] h-2 rounded-full"
                  style={{ width: `${goal.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Alerts Section */}
      <div className="border border-gray-500 border-opacity-20 rounded-lg p-4">
        <h2 className="text-[25px] mb-4 font-normal">Alerts</h2>
        <div className="space-y-3 overflow-y-auto h-[160px] custom-scrollbar px-3">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-4 rounded-lg flex justify-between items-center min-h-[60px] ${
                alert.type === 'success' ? 'bg-[#DDFABD]' : 'bg-[#F56565]'
              }`}
            >
              <p className="text-black">{alert.message}</p>
              <button
                onClick={() => handleDelete(alert.id)}
                className="text-black"
              >
                <X size={24} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthDashboard;



