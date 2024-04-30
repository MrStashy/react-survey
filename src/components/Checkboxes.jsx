/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
export default function Checkboxes( { timeActivities }) {
  return (
    <ul>
      <li>
        <label>
          <input name="spend-time" checked={timeActivities.includes('swimming')}type="checkbox" value="swimming" />
          Swimming
        </label>
      </li>
      <li>
        <label>
          <input name="spend-time" checked={timeActivities.includes('bathing')} type="checkbox" value="bathing" />
          Bathing
        </label>
      </li>
      <li>
        <label>
          <input name="spend-time" checked={timeActivities.includes('chatting')}  type="checkbox" value="chatting" />
          Chatting
        </label>
      </li>
      <li>
        <label>
          <input name="spend-time" checked={timeActivities.includes('noTime')}  type="checkbox" value="noTime" />I don't like
          to spend time with it
        </label>
      </li>
    </ul>
  );
}
