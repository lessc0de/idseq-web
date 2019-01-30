import React from "react";
import PropTypes from "prop-types";

const CatIcon = props => {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="4 5 90 90"
    >
      <g>
        <g display="none">
          <g display="inline">
            <g>
              <path d="M73.184,23.658c-1.625-6.099-5.576-11.248-11.049-14.399c-3.638-2.102-7.708-3.187-11.821-3.187     c-2.062,0-4.137,0.271-6.173,0.818c-6.096,1.629-11.245,5.579-14.399,11.051c-2.105,3.636-3.187,7.707-3.187,11.821     c0,2.065,0.275,4.139,0.818,6.172c0.882,3.261,3.822,5.419,7.058,5.417c0.623,0,1.259-0.079,1.892-0.249     c3.259-0.88,5.422-3.816,5.419-7.055c0-0.624-0.08-1.263-0.25-1.897c-0.212-0.791-0.314-1.58-0.314-2.369     c0-1.574,0.408-3.114,1.227-4.532c1.237-2.125,3.15-3.598,5.522-4.24c0.788-0.214,1.582-0.314,2.373-0.314     c1.57,0,3.108,0.405,4.525,1.224c2.126,1.234,3.598,3.154,4.24,5.525c0.209,0.789,0.314,1.586,0.316,2.377     c-0.005,1.564-0.41,3.105-1.227,4.523L29.536,83.92c-0.665,1.13-0.982,2.396-0.982,3.636c0,0,0,0.007,0,0.025v0.001     c0,1.974,0.811,3.906,2.288,5.301l-0.1,0.172l1.467,0.849c0.036,0.021,0.072,0.04,0.107,0.06l1.36,0.785l0.099-0.173     c0.68,0.202,1.378,0.303,2.071,0.303l0.014,0.002h0.014c2.515,0,4.969-1.314,6.32-3.655l28.623-49.57     C72.913,38.01,74,33.944,74,29.829C74,27.769,73.729,25.695,73.184,23.658z M68.514,20.806c-0.228-0.463-0.484-0.909-0.746-1.352     C68.028,19.897,68.286,20.342,68.514,20.806z M30.469,25.25c-0.28,1.212-0.448,2.445-0.498,3.688     C30.023,27.694,30.189,26.461,30.469,25.25z M35.441,37.831c-0.333,0.088-0.672,0.133-1.01,0.133     c-1.731-0.002-3.313-1.153-3.785-2.909c-0.469-1.748-0.702-3.526-0.702-5.292c0-0.267,0.016-0.532,0.026-0.797     c-0.048,1.278,0.024,2.566,0.219,3.849l7.654-1.997c-0.018-0.213-0.022-0.426-0.029-0.639c0.031,0.951,0.152,1.907,0.407,2.854     c0.089,0.335,0.133,0.674,0.133,1.015C38.353,35.777,37.202,37.357,35.441,37.831z M37.815,29.367     c0.009-0.276,0.027-0.551,0.054-0.826C37.842,28.815,37.825,29.091,37.815,29.367z M37.926,28.01     c0.058-0.399,0.141-0.794,0.237-1.187C38.066,27.215,37.984,27.611,37.926,28.01z M38.279,26.381     c0.119-0.416,0.257-0.828,0.42-1.232C38.536,25.554,38.398,25.965,38.279,26.381z M38.825,24.858     c0.191-0.442,0.4-0.879,0.645-1.303c0-0.001,0.001-0.002,0.002-0.003C39.226,23.977,39.018,24.415,38.825,24.858z M50.3,17.305     c-1.084,0-2.177,0.143-3.255,0.434c-2.865,0.766-5.313,2.5-6.989,4.906l-9.561,2.494c0.452-1.907,1.174-3.76,2.182-5.502     c1.097-1.9,2.478-3.568,4.067-4.991c-0.149,0.133-0.302,0.262-0.447,0.399l18.963-4.947c-3.328-0.847-6.831-0.847-10.239,0.066     c-0.025,0.007-0.049,0.016-0.075,0.022c0.024-0.006,0.047-0.017,0.072-0.023c1.754-0.471,3.53-0.702,5.296-0.702     c3.518,0,6.997,0.924,10.126,2.732c2.968,1.712,5.4,4.093,7.146,6.932c-0.674-1.091-1.449-2.115-2.317-3.059L55.7,18.563     c0.253,0.123,0.505,0.249,0.754,0.389C54.55,17.866,52.436,17.305,50.3,17.305z M43.349,10.7     c-0.154,0.056-0.308,0.111-0.46,0.171C43.042,10.811,43.195,10.755,43.349,10.7z M41.377,11.525     c-0.138,0.067-0.271,0.143-0.408,0.213C41.105,11.667,41.239,11.592,41.377,11.525z M39.852,12.358     c-0.167,0.099-0.334,0.196-0.498,0.3C39.518,12.554,39.686,12.457,39.852,12.358z M38.106,13.521     c-0.178,0.133-0.35,0.273-0.523,0.412C37.757,13.794,37.929,13.654,38.106,13.521z M56.613,19.044     c0.29,0.171,0.572,0.353,0.845,0.545C57.185,19.397,56.903,19.215,56.613,19.044z M58.69,20.58     c0.153,0.139,0.3,0.283,0.444,0.429C58.99,20.863,58.844,20.719,58.69,20.58z M57.782,19.831c0.189,0.142,0.375,0.288,0.555,0.44     C58.157,20.119,57.972,19.973,57.782,19.831z M33.385,90.602c0.139,0.115,0.289,0.221,0.447,0.316     C33.673,90.822,33.525,90.716,33.385,90.602z M35.847,91.49c-0.096,0-0.193-0.012-0.291-0.019     c0.145,0.011,0.288,0.016,0.432,0.011c-0.038,0.002-0.075,0.008-0.113,0.008H35.847z M33.984,91.006     c0.174,0.096,0.353,0.174,0.534,0.24C34.337,91.18,34.158,91.102,33.984,91.006z M34.742,91.322     c0.179,0.054,0.36,0.096,0.542,0.123C35.103,91.418,34.922,91.376,34.742,91.322z M38.295,90.645     c0.148-0.117,0.287-0.247,0.418-0.387C38.582,90.397,38.443,90.527,38.295,90.645z M36.272,91.465     c0.161-0.018,0.32-0.044,0.477-0.08C36.592,91.421,36.434,91.448,36.272,91.465z M37.013,91.313     c0.155-0.048,0.306-0.104,0.454-0.17C37.319,91.21,37.168,91.266,37.013,91.313z M37.686,91.038     c0.164-0.086,0.324-0.182,0.476-0.292C38.009,90.856,37.85,90.952,37.686,91.038z M38.863,90.09     c0.123-0.147,0.237-0.305,0.34-0.473C39.1,89.786,38.986,89.942,38.863,90.09z M62.562,49.173l-10.658,2.781l-5.18,8.972     l10.659-2.78l-5.832,10.101l-10.658,2.78l-4.775,8.27l10.656-2.778l-5.831,10.099l-8.749,2.282     c0.218,0.607,0.583,1.162,1.079,1.607c-0.792-0.697-1.259-1.672-1.322-2.686l0.027-0.084l-0.036-0.277     c0.016-0.627,0.188-1.268,0.521-1.836L61.09,36.037c0.12-0.208,0.209-0.427,0.316-0.64c-0.107,0.213-0.194,0.434-0.314,0.643     l-3.356,5.812l10.597-2.764c1.168-2.266,1.895-4.686,2.157-7.163c-0.294,2.795-1.165,5.525-2.608,8.038L62.562,49.173z      M59.497,21.38c0.105,0.115,0.202,0.237,0.302,0.355C59.698,21.617,59.603,21.495,59.497,21.38z M60.595,22.781     c0.04,0.06,0.084,0.118,0.123,0.179C60.679,22.899,60.635,22.841,60.595,22.781z M70.489,31.919     c0.038-0.353,0.065-0.707,0.084-1.061l-8.226,2.146c0.278-1.041,0.42-2.11,0.422-3.185c-0.003-1.089-0.145-2.179-0.43-3.25     c-0.183-0.684-0.432-1.338-0.721-1.971c0.002,0.004,0.005,0.009,0.007,0.013l7.668-2c0.234,0.626,0.439,1.267,0.614,1.921     c0.471,1.754,0.701,3.53,0.701,5.296C70.609,30.529,70.562,31.225,70.489,31.919z M61.136,23.654     c0.033,0.059,0.066,0.118,0.099,0.178C61.202,23.772,61.169,23.713,61.136,23.654z" />
            </g>
          </g>
        </g>
        <g display="none">
          <g display="inline">
            <g>
              <path d="M94.989,19.581c0.002-4.529-1.055-7.934-3.164-10.234c-2.109-2.303-5.086-3.19-8.108-3.177     c-7.831,0.074-17.25,5.25-23.746,9.922c-3.305-0.894-6.768-1.385-10.343-1.382c-0.001,0-0.028-0.002-0.1,0     c-3.285,0.009-6.482,0.422-9.546,1.188c-6.49-4.63-15.736-9.653-23.45-9.725c-3.03-0.01-6.005,0.875-8.12,3.18     c-2.108,2.3-3.168,5.705-3.166,10.234c0.007,5.496,1.521,12.805,5.02,22.645c-1.645,4.238-2.569,8.735-2.589,13.372     c-0.017,0.053-0.015,0.151,0,0.275c0.096,21.038,18.911,38.133,41.863,38.31c22.518-0.162,41.032-16.614,41.865-37.106     l0.031-0.01v-1.377c0-4.12-0.71-8.125-2.006-11.94C93.313,33.138,94.981,25.355,94.989,19.581z M73.799,58.601     c0.157,0.931,0.969,1.592,1.884,1.592c0.105,0,0.214-0.008,0.324-0.028l11.492-1.952c-0.138,1.729-0.42,3.425-0.836,5.08     l-11.298,1.921c-1.042,0.177-1.743,1.166-1.567,2.207c0.16,0.932,0.971,1.592,1.889,1.592c0.105,0,0.213-0.007,0.32-0.025     l9.328-1.589C80.04,80.56,66.068,90.235,49.543,90.362c-16.604-0.136-30.63-9.905-35.852-23.147l10.407,1.771     c0.108,0.019,0.215,0.028,0.322,0.028c0.917,0,1.728-0.661,1.886-1.592c0.177-1.044-0.524-2.033-1.567-2.21l-12.23-2.079     c-0.041-0.007-0.081-0.004-0.122-0.008c-0.405-1.659-0.675-3.359-0.8-5.089l12.511,2.127c0.108,0.019,0.216,0.028,0.322,0.028     c0.917,0,1.728-0.658,1.886-1.592c0.177-1.041-0.524-2.03-1.567-2.208l-13.188-2.241c0.194-3.844,1.069-7.585,2.529-11.158     l0.279-0.68l-0.25-0.692c-3.594-9.942-5.044-17.143-5.037-22.036c0-3.976,0.928-6.318,2.155-7.642     c1.221-1.32,2.933-1.931,5.304-1.944c6.266-0.074,15.881,4.977,21.922,9.512l0.746,0.555l0.9-0.248     c2.43-0.665,4.953-1.072,7.544-1.216v4.124H35.568c-1.06,0-1.916,0.858-1.916,1.915c0,1.054,0.855,1.912,1.916,1.912h12.076     v3.826H35.568c-1.06,0-1.916,0.855-1.916,1.912c0,1.057,0.855,1.915,1.916,1.915h12.076v3.825H35.568     c-1.06,0-1.916,0.855-1.916,1.913c0,1.058,0.855,1.912,1.916,1.912h12.076v3.922c0,1.056,0.856,1.913,1.913,1.913     c1.058,0,1.912-0.857,1.912-1.913v-3.922h12.3c1.059,0,1.913-0.854,1.913-1.912c0-1.057-0.854-1.913-1.913-1.913h-12.3v-3.825     h12.3c1.059,0,1.913-0.858,1.913-1.915c0-1.057-0.854-1.912-1.913-1.912h-12.3v-3.826h12.3c1.059,0,1.913-0.857,1.913-1.912     c0-1.057-0.854-1.915-1.913-1.915h-12.3v-4.124c2.871,0.151,5.661,0.628,8.338,1.418l0.919,0.271l0.767-0.577     c6.022-4.569,15.854-9.798,22.225-9.722c2.366,0.014,4.073,0.625,5.293,1.942c1.224,1.323,2.151,3.668,2.151,7.645     c0.01,5.128-1.583,12.792-5.557,23.488l-0.241,0.653l0.236,0.66c1.15,3.202,1.831,6.526,1.979,9.936l-12.214,2.076     C74.322,56.57,73.621,57.557,73.799,58.601z M64.392,72.068c-1.056,0-1.911,0.856-1.911,1.912     c0.082,0.635-0.801,1.985-3.232,3.089c-1.956,0.904-4.698,1.563-7.779,1.76v-9.135c2.054-1.839,4.68-3.749,6.165-5.635     c0.386-0.497,0.467-1.163,0.212-1.738c-0.254-0.575-0.798-0.964-1.423-1.021c-2.289-0.193-4.58-0.291-6.866-0.291     c-2.29,0-4.58,0.098-6.866,0.291c-0.628,0.058-1.169,0.446-1.424,1.021c-0.254,0.575-0.173,1.241,0.211,1.738     c1.486,1.885,4.112,3.796,6.166,5.635v9.134c-3.084-0.196-5.825-0.854-7.78-1.759c-2.43-1.104-3.314-2.454-3.232-3.089     c0-1.056-0.856-1.912-1.913-1.912c-1.056,0-1.912,0.856-1.912,1.912c0.078,3.131,2.519,5.198,5.458,6.563     c3.018,1.383,6.951,2.17,11.293,2.175c4.335-0.005,8.27-0.792,11.286-2.175c2.94-1.365,5.38-3.433,5.462-6.563     C66.307,72.925,65.448,72.068,64.392,72.068z M17.147,33.22c-0.007,0.217,4.18-7.562,13.63-10.992     C23.853,15.842,8.472,8.682,17.147,33.22z M82.812,33.22c8.674-24.538-6.706-17.379-13.63-10.992     C78.634,25.658,82.82,33.438,82.812,33.22z M35.658,55.232c2.203,0,3.986-1.783,3.986-3.984c0-2.202-1.783-3.988-3.986-3.988     c-0.551,0-1.076,0.112-1.553,0.314l-4.712-1.251l2.328,4.437c-0.02,0.162-0.049,0.321-0.049,0.488     C31.671,53.449,33.457,55.232,35.658,55.232z M65.324,47.575c-0.478-0.202-1.002-0.314-1.554-0.314     c-2.202,0-3.986,1.786-3.986,3.988c0,2.201,1.784,3.984,3.986,3.984s3.986-1.783,3.986-3.984c0-0.167-0.029-0.325-0.049-0.486     l2.328-4.438L65.324,47.575z" />
            </g>
          </g>
        </g>
        <g display="none">
          <g display="inline">
            <g>
              <path d="M35.784,45.171c-1.649,0-2.985,1.336-2.985,2.985c0,1.649,1.336,2.985,2.985,2.985c1.648,0,2.984-1.336,2.984-2.985     C38.769,46.508,37.432,45.171,35.784,45.171z M64.818,45.171c-1.648,0-2.984,1.336-2.984,2.985c0,1.649,1.336,2.985,2.984,2.985     s2.984-1.336,2.984-2.985C67.803,46.508,66.467,45.171,64.818,45.171z M89.4,14.458c-3.6-3.36-8.541-5.121-13.928-5.118     c-0.078,0.002-0.15,0.002-0.217,0.003c-0.113-0.003-0.205-0.001-0.268-0.001c-5.387-0.005-10.328,1.755-13.93,5.118     c-1.228,1.142-2.277,2.476-3.139,3.968c-2.462-0.699-5.016-1.101-7.64-1.136c-2.698,0.036-5.321,0.458-7.846,1.191     c-0.867-1.515-1.93-2.868-3.174-4.023c-3.6-3.362-8.542-5.121-13.928-5.118c-0.065,0-0.155-0.002-0.27,0.001     c-0.066-0.001-0.138-0.001-0.214-0.001c-5.388-0.003-10.332,1.755-13.931,5.116c-3.608,3.354-5.78,8.292-5.771,14.256v0.029     C5.16,37.171,9.535,44.428,16.002,47.95c-0.576,2.338-0.951,4.721-1.103,7.112c-0.042,0.67-0.061,1.341-0.061,2.006     c0.002,18.465,15.567,33.323,35.412,33.47c19.875-0.146,35.439-15.005,35.441-33.47c0-0.665-0.02-1.331-0.059-2.006l-1.789,0.108     l-1.787,0.107c0.037,0.598,0.053,1.194,0.053,1.79c0.002,16.353-13.781,29.715-31.859,29.888     c-18.05-0.173-31.833-13.535-31.831-29.888c0-0.596,0.018-1.19,0.057-1.782c0.996-17.405,15.538-34.418,31.804-34.414     c16.236-0.004,30.781,17.009,31.777,34.406l3.576-0.216c-0.153-2.43-0.54-4.85-1.133-7.224     c6.363-3.559,10.658-10.75,10.672-19.095v-0.03C95.182,22.75,93.01,17.812,89.4,14.458z M21.665,34.803     c-1.778-1.223-3.012-3.4-3.026-6.077l0.003-0.012c0.084-4.085,2.563-6.075,6.337-6.189c0,0,0.025,0,0.081,0l0.067,0.003     l0.07-0.005v0.002c2.312,0.07,4.124,0.864,5.204,2.404C27.031,27.683,24.07,31.043,21.665,34.803z M33.292,22.788     c-0.331-0.456-0.696-0.881-1.105-1.26c-1.84-1.716-4.335-2.588-6.989-2.585c-0.014,0-0.059-0.001-0.137,0.001     c-0.022,0-0.049-0.001-0.082-0.001c-2.656-0.002-5.151,0.87-6.991,2.585c-1.831,1.696-2.924,4.212-2.928,7.123     c0,0.022-0.002,0.047-0.002,0.075c0.006,3.873,1.894,7.303,4.79,9.19c-1.106,2.083-2.047,4.26-2.807,6.495     c-4.91-2.994-8.286-8.737-8.313-15.627l0.002-0.03v-0.04c0.085-10.134,6.879-15.677,16.118-15.791c0.062,0,0.133,0,0.216,0.002     h0.044l0.046-0.002h0.178c5.954,0.073,10.875,2.419,13.654,6.784C37.002,20.542,35.1,21.58,33.292,22.788z M78.802,34.704     c-2.428-3.773-5.413-7.143-8.812-9.895c1.094-1.461,2.873-2.217,5.132-2.284l0.002-0.003l0.07,0.005l0.066-0.002     c0.053,0,0.078,0,0.078,0c3.773,0.112,6.254,2.105,6.338,6.189h0.004l-0.004,0.011C81.663,31.328,80.5,33.463,78.802,34.704z      M91.59,28.744c-0.014,6.825-3.311,12.537-8.134,15.568c-0.77-2.246-1.723-4.431-2.842-6.523     c2.806-1.908,4.637-5.263,4.646-9.064v-0.011c0.012-2.938-1.084-5.478-2.932-7.186c-1.84-1.718-4.334-2.589-6.99-2.587     c-0.033,0-0.061,0.001-0.084,0.001c-0.074-0.003-0.121-0.001-0.133-0.001c-2.656-0.002-5.152,0.869-6.988,2.587     c-0.379,0.351-0.717,0.745-1.028,1.163c-1.818-1.203-3.73-2.23-5.722-3.058c2.787-4.317,7.685-6.639,13.605-6.712     c0.088,0,0.146,0,0.178,0.002h0.09c0.08,0,0.152-0.002,0.217-0.002c9.236,0.115,16.033,5.658,16.117,15.792V28.744z      M50.326,45.368c-0.024,0-0.045,0-0.062,0.001c-0.042-0.001-0.06,0-0.06-0.001c-3.204-0.008-6.134,1.501-8.155,3.969     c-2.018,2.448-3.199,5.817-3.217,9.682c-0.005,0.073-0.003,0.102-0.003,0.104c-0.005,3.89,1.207,7.112,3.3,9.335     c2.079,2.224,4.98,3.38,8.034,3.38h0.029c0,0,0.021,0,0.075,0h0.044l0.046-0.004c3.057,0.004,5.963-1.152,8.045-3.376     c2.094-2.226,3.305-5.445,3.301-9.335v-0.003h0.002c0-3.91-1.186-7.313-3.221-9.783C56.459,46.869,53.529,45.359,50.326,45.368z      M58.121,59.122c-0.117,6.308-3.461,9.03-7.782,9.131c-0.042,0-0.076,0-0.103,0.002h-0.044c-4.32-0.103-7.665-2.827-7.782-9.133     v-0.003c0.059-6.41,3.703-10.148,7.774-10.171l0.029,0.002l0.102-0.002h0.011c4.078,0.01,7.738,3.749,7.795,10.171V59.122z" />
            </g>
          </g>
        </g>
        <g display="none">
          <g display="inline">
            <g>
              <path d="M71.687,42.905c-0.084-9.975-10.058-17.434-21.834-17.452c-11.778,0.018-21.75,7.478-21.836,17.452     c0,2.378,0.614,4.639,1.675,6.679c-2.482,2.877-4,6.387-4,10.199c0,5.279,2.865,9.974,7.253,13.253     c4.397,3.293,10.356,5.271,16.907,5.273c6.549-0.002,12.508-1.98,16.905-5.273c4.389-3.279,7.257-7.974,7.253-13.253     c0.002-3.812-1.515-7.321-3.998-10.198C71.074,47.544,71.688,45.283,71.687,42.905z M70.722,59.783     c0,4.046-2.174,7.791-5.937,10.623c-3.752,2.817-9.049,4.62-14.933,4.615c-5.885,0.005-11.183-1.798-14.935-4.615     c-3.761-2.832-5.937-6.577-5.937-10.623c0.002-3.242,1.408-6.261,3.906-8.818l0.906-0.925l-0.684-1.096     c-1.161-1.869-1.802-3.894-1.805-6.039c0.003-3.778,1.945-7.259,5.284-9.884c3.332-2.612,8.03-4.28,13.253-4.28h0.011     c5.228-0.002,9.93,1.666,13.262,4.28c3.341,2.625,5.283,6.106,5.283,9.884c0,2.145-0.642,4.17-1.803,6.039L65.91,50.04     l0.905,0.925C69.315,53.522,70.72,56.541,70.722,59.783z M42.487,50.041c1.39,0,2.518-1.128,2.518-2.519     s-1.128-2.519-2.518-2.519c-1.392,0-2.52,1.128-2.52,2.519S41.095,50.041,42.487,50.041z M59.794,47.522     c0-1.39-1.128-2.519-2.52-2.519c-1.39,0-2.519,1.128-2.519,2.519s1.129,2.519,2.519,2.519     C58.666,50.041,59.794,48.913,59.794,47.522z M40.997,36.302c0.968,0.013,1.207,0.104,1.765,0.262     c0.557,0.171,1.433,0.408,2.696,0.395c1.264,0.013,2.139-0.224,2.696-0.395c0.558-0.158,0.798-0.25,1.769-0.262     c0.969,0.013,1.209,0.104,1.77,0.262c0.558,0.171,1.433,0.408,2.698,0.395c0.029,0.001,0.059,0.001,0.09,0.001     c1.214,0,2.062-0.229,2.607-0.396c0.561-0.158,0.801-0.25,1.772-0.262c0.908,0,1.643-0.735,1.643-1.643     c0-0.909-0.734-1.645-1.643-1.645c-1.265-0.011-2.14,0.225-2.699,0.396c-0.559,0.157-0.802,0.252-1.771,0.264     c-0.97-0.012-1.214-0.106-1.771-0.264c-0.559-0.171-1.434-0.407-2.696-0.396c-1.264-0.011-2.141,0.225-2.698,0.396     c-0.558,0.157-0.798,0.25-1.766,0.261c-0.968-0.011-1.21-0.104-1.765-0.261c-0.557-0.171-1.435-0.407-2.696-0.396     c-0.91,0-1.645,0.736-1.645,1.645C39.352,35.566,40.087,36.302,40.997,36.302z M40.997,41.257     c0.968,0.011,1.207,0.104,1.765,0.261c0.557,0.171,1.433,0.407,2.696,0.398h0.072c1.226,0,2.077-0.231,2.624-0.398     c0.558-0.157,0.798-0.25,1.769-0.261c0.969,0.011,1.209,0.104,1.77,0.261c0.558,0.171,1.433,0.407,2.698,0.396     c1.264,0.011,2.14-0.225,2.697-0.396c0.561-0.157,0.801-0.25,1.772-0.261c0.908,0,1.643-0.736,1.643-1.644     c0-0.909-0.734-1.644-1.643-1.644c-1.265-0.013-2.14,0.224-2.699,0.396c-0.559,0.157-0.802,0.251-1.771,0.264     c-0.97-0.013-1.214-0.107-1.771-0.264c-0.559-0.171-1.434-0.408-2.696-0.396c-1.264-0.013-2.141,0.224-2.698,0.396     c-0.558,0.157-0.798,0.251-1.766,0.262c-0.968-0.011-1.21-0.105-1.765-0.262c-0.557-0.171-1.435-0.408-2.696-0.396     c-0.91,0-1.645,0.735-1.645,1.644C39.352,40.521,40.087,41.257,40.997,41.257z M46.013,56.439     c-0.706,0.329-0.877,1.457-0.382,2.518c0.494,1.061,1.468,1.656,2.174,1.325c0.707-0.328,0.877-1.456,0.383-2.518     C47.693,56.704,46.719,56.111,46.013,56.439z M51.698,57.765c-0.495,1.062-0.323,2.189,0.381,2.518     c0.708,0.331,1.681-0.265,2.176-1.325s0.323-2.188-0.383-2.518C53.165,56.111,52.191,56.704,51.698,57.765z M57.052,61.55     c0.271,0.164,0.567,0.244,0.861,0.244c0.553,0,1.092-0.279,1.402-0.782c0.581-0.938,0.925-2.035,0.923-3.18     c0.002-1.146-0.342-2.239-0.926-3.179c-0.575-0.94-1.379-1.737-2.321-2.384c-0.942-0.648-2.033-1.152-3.222-1.5     c-1.19-0.344-2.479-0.532-3.828-0.532s-2.638,0.188-3.829,0.534c-1.189,0.346-2.28,0.85-3.221,1.498     c-0.942,0.646-1.746,1.443-2.326,2.386c-0.576,0.936-0.926,2.029-0.924,3.177c-0.002,1.147,0.348,2.241,0.924,3.178     c0.474,0.772,1.488,1.015,2.26,0.54c0.775-0.476,1.016-1.487,0.542-2.263c-0.298-0.488-0.436-0.963-0.438-1.455     c0.002-0.495,0.139-0.967,0.438-1.456c0.297-0.483,0.761-0.969,1.386-1.396c0.625-0.429,1.395-0.796,2.274-1.05     c0.886-0.258,1.872-0.403,2.913-0.403c1.042,0,2.027,0.146,2.908,0.403c0.883,0.254,1.657,0.621,2.28,1.05     c0.624,0.428,1.087,0.913,1.384,1.396c0.298,0.485,0.435,0.959,0.437,1.456c-0.002,0.498-0.139,0.967-0.437,1.452     C56.038,60.061,56.279,61.074,57.052,61.55z M58.912,64.666h-0.003c-1.114,0.783-2.475,1.438-4.005,1.893     c-1.532,0.456-3.233,0.71-5.024,0.71c-1.792,0-3.492-0.254-5.022-0.71c-1.534-0.454-2.893-1.109-4.01-1.893     c-0.743-0.521-1.768-0.342-2.29,0.403c-0.522,0.742-0.343,1.765,0.4,2.287c1.438,1.01,3.118,1.805,4.962,2.354     c1.845,0.55,3.856,0.847,5.959,0.847c2.104,0,4.115-0.297,5.962-0.847c1.842-0.549,3.521-1.344,4.957-2.354     c0.743-0.522,0.923-1.547,0.4-2.287C60.678,64.326,59.652,64.145,58.912,64.666z M85.047,30.718     c-0.191-0.014-0.389-0.019-0.57-0.016c-2.392,0.011-4.57,0.898-6.323,2.358c-6.417-11.569-17.14-19.003-28.143-19.123     c-11.021,0.12-21.75,7.555-28.167,19.127c-1.753-1.463-3.932-2.353-6.325-2.364c-0.184,0-0.38,0.005-0.59,0.019     c-5.614,0.357-9.721,5.416-9.713,11.26c0.002,0.229,0.005,0.481,0.026,0.754c0.349,5.958,4.859,10.766,10.489,10.792     c0.137,0,0.262-0.005,0.388-0.01v0.001c0.002,8.717,3.502,16.952,9.49,23.01c5.984,6.056,14.489,9.932,24.39,9.932     c9.902,0,18.403-3.876,24.388-9.936c5.988-6.054,9.487-14.289,9.487-23.006c0-0.001,0-0.001,0-0.002     c0.129,0.005,0.257,0.011,0.391,0.011c5.632-0.025,10.143-4.835,10.491-10.797l0.003-0.016c0.011-0.242,0.018-0.485,0.018-0.734     C94.788,36.137,90.686,31.076,85.047,30.718z M16.293,50.202c-0.063,0.005-0.124,0.022-0.187,0.026     c-0.126,0.004-0.258,0.008-0.375,0.008c-3.619,0.026-6.937-3.245-7.206-7.704l-0.002-0.03c-0.014-0.156-0.018-0.332-0.018-0.524     c0.012-4.36,3.015-7.791,6.641-7.979c0.122-0.007,0.242-0.012,0.374-0.012c1.78-0.012,3.479,0.781,4.787,2.112     c-1.606,3.48-2.842,7.268-3.604,11.3C16.521,48.334,16.389,49.269,16.293,50.202z M49.999,83.168     C31.956,83.152,19.426,69.18,19.408,53.516c0-1.816,0.169-3.66,0.522-5.503c3.4-18.22,17.121-30.768,30.08-30.789     c12.938,0.021,26.658,12.569,30.057,30.783v0.002c0.351,1.846,0.52,3.69,0.52,5.506C80.571,69.18,68.039,83.152,49.999,83.168z      M91.474,42.551c-0.281,4.449-3.593,7.713-7.209,7.685c-0.12,0.002-0.25-0.002-0.39-0.009c-0.059-0.003-0.114-0.02-0.172-0.024     c-0.096-0.933-0.226-1.868-0.404-2.805c-0.762-4.03-1.998-7.815-3.603-11.293c1.295-1.323,2.975-2.116,4.738-2.117     c0.014,0,0.027,0,0.042,0c0.13,0,0.246,0.002,0.359,0.012c3.642,0.19,6.641,3.616,6.652,7.978     C91.488,42.16,91.483,42.351,91.474,42.551L91.474,42.551z" />
            </g>
          </g>
        </g>
        <g display="none">
          <g display="inline">
            <g>
              <path d="M49.598,43.922c-11.819,0.019-21.697,8.245-21.743,18.887c0.046,10.646,9.924,18.869,21.743,18.891     c11.818-0.021,21.696-8.245,21.743-18.891C71.294,52.167,61.416,43.941,49.598,43.922z M62.67,73.68     c-3.305,2.837-7.93,4.628-13.072,4.628c-5.142,0-9.769-1.791-13.073-4.628c-3.306-2.845-5.278-6.669-5.278-10.87     s1.973-8.024,5.278-10.868c3.304-2.836,7.931-4.629,13.073-4.629c5.143,0,9.768,1.792,13.072,4.629     c3.308,2.844,5.278,6.667,5.278,10.868S65.978,70.835,62.67,73.68z M69.568,41.598c-1.836,0-3.323,1.489-3.323,3.323     c0,1.837,1.487,3.325,3.323,3.325c1.835,0,3.324-1.488,3.324-3.325C72.893,43.087,71.403,41.598,69.568,41.598z M32.972,44.921     c0-1.834-1.488-3.323-3.324-3.323c-1.836,0-3.323,1.489-3.323,3.323c0,1.837,1.487,3.325,3.323,3.325     C31.484,48.246,32.972,46.758,32.972,44.921z M49.597,49.491c-3.578,0-6.478,2.9-6.478,6.479c0,3.578,2.9,6.479,6.478,6.479     s6.481-2.901,6.481-6.479C56.078,52.392,53.175,49.491,49.597,49.491z M94.845,26c-0.003-8.287-6.719-15.003-15.006-15.006     c-6.609,0.002-12.201,4.28-14.202,10.213c-4.886-2.1-10.319-3.28-16.04-3.291c-5.495,0.01-10.724,1.101-15.458,3.047     c-2.071-5.804-7.594-9.967-14.11-9.969C11.743,10.997,5.026,17.713,5.026,26c0,6.238,3.814,11.566,9.23,13.829     c-1.868,4.179-2.909,8.764-2.913,13.59c0.019,19.711,17.225,35.465,38.253,35.502c21.028-0.037,38.236-15.791,38.256-35.502     c-0.005-4.742-1.013-9.25-2.819-13.369C90.754,37.936,94.842,32.457,94.845,26z M8.417,26c0.011-6.413,5.2-11.602,11.612-11.613     c5.15,0.009,9.492,3.365,11.013,8.005c-6.453,3.329-11.766,8.334-15.242,14.402C11.485,35.102,8.426,30.918,8.417,26z      M74.298,76.078c-6.301,5.827-15.032,9.45-24.701,9.45c-9.67,0-18.397-3.623-24.699-9.45     c-6.303-5.833-10.163-13.829-10.165-22.659c0.002-8.833,3.862-16.829,10.165-22.66c6.298-5.824,15.024-9.45,24.69-9.45h0.009     c9.669-0.002,18.4,3.623,24.701,9.45c6.303,5.831,10.161,13.827,10.165,22.66C84.459,62.249,80.601,70.245,74.298,76.078z      M83.505,36.994c-3.37-5.974-8.515-10.931-14.775-14.295c1.427-4.799,5.846-8.303,11.109-8.312     c6.413,0.011,11.601,5.2,11.612,11.613C91.441,31.129,88.115,35.456,83.505,36.994z" />
            </g>
          </g>
        </g>
        <g display="none">
          <g display="inline">
            <g>
              <path d="M39.245,50.489c1.546,0,2.799-1.254,2.799-2.798c0-1.546-1.252-2.8-2.799-2.8c-1.546,0-2.799,1.254-2.799,2.8     C36.446,49.235,37.699,50.489,39.245,50.489z M61.255,50.489c1.546,0,2.8-1.254,2.8-2.798c0-1.546-1.254-2.8-2.8-2.8     s-2.798,1.254-2.798,2.8C58.457,49.235,59.709,50.489,61.255,50.489z M55.426,84.195c0.181,0.067,0.367,0.097,0.55,0.097     c0.658,0,1.277-0.405,1.517-1.061l1.32-3.626c0.304-0.838-0.128-1.765-0.967-2.066c-0.836-0.305-1.763,0.128-2.066,0.964     l-1.317,3.623C54.155,82.965,54.587,83.889,55.426,84.195z M42.465,83.231c0.237,0.655,0.856,1.062,1.515,1.062     c0.183,0,0.369-0.031,0.551-0.099c0.839-0.307,1.27-1.23,0.964-2.069l-1.321-3.623c-0.304-0.839-1.23-1.271-2.067-0.964     c-0.838,0.302-1.27,1.229-0.964,2.069L42.465,83.231z M85.582,33.575c-0.005-2.875-0.906-4.688-0.982-4.84     c-0.394-0.777-1.329-1.099-2.118-0.731L66.1,35.643c-2.299-2.6-5.219-4.542-8.497-5.702l1.479-8.391     c3.849-0.085,7.219-2.862,7.914-6.794L67,14.75c0.08-0.477,0.121-0.954,0.121-1.43c0-3.922-2.807-7.386-6.799-8.094     c-0.481-0.088-0.964-0.127-1.437-0.127c-3.927,0-7.388,2.81-8.096,6.802c-0.086,0.481-0.128,0.962-0.125,1.434     c0,3.391,2.097,6.432,5.239,7.657l-1.43,8.113c-1.472-0.288-2.983-0.447-4.524-0.438c-0.419-0.002-0.833,0.026-1.25,0.046     l0.002-0.02l-0.331,0.032c-0.46,0.029-0.915,0.078-1.368,0.133l-0.281,0.027c-0.063,0.007-0.119,0.022-0.182,0.03     c-0.342,0.049-0.681,0.104-1.018,0.168c-0.231,0.04-0.472,0.07-0.696,0.115l-1.446-8.209c3.143-1.223,5.239-4.265,5.241-7.654     c0-0.472-0.042-0.953-0.127-1.434V11.9c-0.709-3.993-4.17-6.801-8.094-6.801c-0.479,0-0.958,0.042-1.438,0.128     c-3.992,0.706-6.8,4.169-6.8,8.094c0,0.476,0.042,0.958,0.127,1.438c0.695,3.928,4.064,6.708,7.916,6.792l1.507,8.54     c-3.653,1.349-6.22,3.473-7.939,5.44l-16.143-7.527c-0.789-0.369-1.723-0.046-2.118,0.73c-0.077,0.152-0.978,1.965-0.982,4.84     c-0.038,4.701,2.582,11.886,13.959,18.434c-0.457,7.045-0.912,14.084-1.366,21.117c-0.04,0.495-0.06,1.012-0.06,1.519     c0.007,11.62,10.136,20.672,22.888,20.692c12.751-0.021,22.878-9.072,22.885-20.692c0-0.509-0.02-1.02-0.06-1.538     c-0.45-6.982-0.902-13.984-1.355-20.985C82.963,45.544,85.619,38.305,85.582,33.575z M53.891,13.335     c0-0.288,0.024-0.58,0.076-0.87c0.426-2.432,2.544-4.139,4.919-4.139c0.289,0,0.579,0.024,0.873,0.077     c2.429,0.424,4.139,2.544,4.139,4.917l-0.08,0.883h0.002c-0.427,2.424-2.545,4.128-4.918,4.128c-0.285,0-0.583-0.026-0.881-0.078     C55.6,17.83,53.891,15.71,53.891,13.335z M41.262,18.255c-0.295,0.053-0.587,0.077-0.877,0.077c-2.378,0-4.497-1.71-4.92-4.135     c-0.052-0.298-0.076-0.589-0.079-0.877c0-2.374,1.71-4.494,4.137-4.917c0.298-0.053,0.59-0.079,0.877-0.079     c2.375,0,4.492,1.708,4.917,4.136c0.052,0.294,0.078,0.586,0.078,0.875C45.396,15.71,43.685,17.83,41.262,18.255z M33.264,42.575     c1.004,0.151,1.955,0.229,2.849,0.229h0.127c5.687,0,9.047-3.197,10.571-6.214c0.924-1.77,1.345-3.476,1.54-4.621     c0.528-0.042,1.061-0.07,1.6-0.074c9.352,0.063,17.168,5.967,17.99,16.386c0.502,7.769,1.005,15.552,1.508,23.336H30.452     c0.504-7.797,1.007-15.576,1.509-23.353C32.125,46.181,32.582,44.287,33.264,42.575z M28.724,48.36     c-9.448-5.883-10.932-11.464-10.967-14.785c-0.001-0.725,0.075-1.354,0.175-1.869l13.884,6.473     c-0.698,1.146-1.021,1.951-1.038,2.005l-0.054,0.141c-1.073,2.287-1.776,4.863-1.98,7.716     C28.738,48.147,28.731,48.253,28.724,48.36z M69.56,75.565c-0.019,0.321-0.028,0.644-0.065,0.96     c-0.032,0.274-0.09,0.541-0.136,0.812c-0.052,0.302-0.093,0.606-0.161,0.903c-0.062,0.274-0.149,0.54-0.227,0.809     c-0.08,0.284-0.151,0.572-0.247,0.851c-0.094,0.271-0.212,0.533-0.319,0.799c-0.107,0.264-0.204,0.533-0.324,0.791     c-0.125,0.267-0.273,0.521-0.412,0.782c-0.131,0.244-0.252,0.494-0.395,0.732c-0.155,0.259-0.334,0.504-0.503,0.754     c-0.152,0.226-0.294,0.457-0.457,0.675c-0.186,0.247-0.392,0.479-0.591,0.717c-0.172,0.206-0.335,0.42-0.518,0.619     c-0.211,0.231-0.444,0.445-0.669,0.666c-0.192,0.188-0.375,0.386-0.577,0.566c-0.238,0.214-0.496,0.409-0.747,0.611     c-0.21,0.17-0.411,0.349-0.63,0.51c-0.262,0.194-0.544,0.368-0.818,0.549c-0.228,0.15-0.445,0.311-0.682,0.452     c-0.285,0.173-0.59,0.322-0.887,0.481c-0.243,0.13-0.478,0.27-0.728,0.391c-0.312,0.15-0.642,0.277-0.965,0.412     c-0.253,0.106-0.497,0.225-0.756,0.321c-0.342,0.127-0.7,0.229-1.052,0.34c-0.258,0.081-0.507,0.175-0.77,0.247     c-0.367,0.101-0.75,0.174-1.127,0.256c-0.263,0.057-0.518,0.128-0.785,0.176c-0.417,0.075-0.849,0.12-1.277,0.172     c-0.24,0.029-0.473,0.074-0.717,0.096c-0.678,0.061-1.367,0.093-2.069,0.095c-0.702-0.002-1.392-0.034-2.07-0.095     c-0.233-0.021-0.457-0.064-0.687-0.092c-0.438-0.053-0.88-0.099-1.307-0.176c-0.276-0.049-0.54-0.123-0.812-0.182     c-0.369-0.081-0.742-0.151-1.101-0.25c-0.274-0.074-0.535-0.172-0.803-0.258c-0.34-0.107-0.687-0.205-1.017-0.328     c-0.272-0.102-0.529-0.225-0.794-0.337c-0.31-0.131-0.627-0.252-0.927-0.396c-0.259-0.125-0.502-0.27-0.753-0.404     c-0.289-0.154-0.585-0.3-0.863-0.467c-0.241-0.146-0.464-0.31-0.698-0.464c-0.269-0.178-0.545-0.348-0.802-0.537     c-0.225-0.166-0.432-0.35-0.647-0.524c-0.245-0.197-0.497-0.388-0.729-0.597c-0.206-0.185-0.392-0.385-0.588-0.577     c-0.221-0.218-0.451-0.429-0.659-0.655c-0.185-0.201-0.349-0.417-0.522-0.626c-0.197-0.235-0.402-0.465-0.585-0.71     c-0.163-0.218-0.304-0.448-0.456-0.673c-0.17-0.251-0.35-0.498-0.505-0.758c-0.139-0.231-0.256-0.476-0.384-0.713     c-0.143-0.267-0.295-0.529-0.423-0.803c-0.114-0.245-0.206-0.5-0.308-0.75c-0.114-0.28-0.238-0.557-0.337-0.843     c-0.088-0.256-0.152-0.521-0.227-0.781c-0.084-0.293-0.178-0.582-0.247-0.881c-0.061-0.266-0.097-0.539-0.144-0.81     c-0.053-0.303-0.115-0.603-0.151-0.91c-0.032-0.277-0.039-0.561-0.057-0.841c-0.018-0.276-0.042-0.551-0.046-0.83H69.6     C69.597,75.087,69.573,75.325,69.56,75.565z M71.186,48.488c-0.009-0.144-0.018-0.287-0.027-0.431     c-0.268-3.744-1.371-7.025-3.078-9.777l14.099-6.574c0.1,0.516,0.177,1.146,0.176,1.869     C82.316,36.923,80.818,42.559,71.186,48.488z" />
            </g>
          </g>
        </g>
        <g display="none">
          <g display="inline">
            <g>
              <path d="M37.417,53.831c-1.797,0-3.254,1.457-3.254,3.254s1.457,3.256,3.254,3.256c1.797,0,3.255-1.459,3.255-3.256     S39.214,53.831,37.417,53.831z M62.383,53.831c-1.796,0-3.253,1.457-3.253,3.254s1.457,3.256,3.253,3.256     c1.799,0,3.256-1.459,3.256-3.256S64.182,53.831,62.383,53.831z M49.93,63.314c-2.96,0-5.361,2.026-5.361,4.527     c0,2.502,2.401,4.528,5.361,4.528c2.959,0,5.358-2.026,5.358-4.528C55.288,65.341,52.889,63.314,49.93,63.314z M89.653,26.499     c-9.357-8.477-26.96-13.235-27.072-13.302l-0.747-0.207c-0.639-0.208-1.29-0.388-1.952-0.541l-0.561-0.155l0.01,0.028     c-1.499-0.308-3.05-0.47-4.637-0.471l-9.21,0.002c-1.589,0-3.142,0.163-4.643,0.471l0.012-0.034l-0.665,0.185     c-0.61,0.144-1.211,0.31-1.801,0.501l-0.793,0.22c-0.059,0.02-7.937,2.199-15.92,6.103c-3.996,1.96-8.021,4.341-11.153,7.196     c-3.106,2.841-5.443,6.272-5.46,10.33c0.002,0.291,0.013,0.591,0.042,0.901c1.313,14.392,12.783,32.298,12.82,32.425l1.984,3.144     l2.471-7.196c0.859,11.989,10.907,21.512,23.108,21.52l9.21-0.002v0.002c12.2-0.008,22.245-9.531,23.103-21.521l2.472,7.196     l1.989-3.141c0.032-0.128,11.503-18.034,12.815-32.437c0.024-0.299,0.038-0.584,0.038-0.889     C95.098,32.768,92.758,29.337,89.653,26.499z M22.31,35.026v20.29l-3.315,9.654c-3.271-5.735-9.55-18.081-10.343-27.562     c-0.017-0.195-0.026-0.381-0.026-0.581c-0.015-2.568,1.55-5.188,4.3-7.698c3.717-3.412,9.383-6.356,14.435-8.496     C24.207,24.591,22.312,29.593,22.31,35.026z M74.297,64.447c-0.017,10.769-8.834,19.586-19.603,19.605h-9.21     c-10.772-0.02-19.59-8.837-19.606-19.605V35.026c0.016-10.774,8.833-19.589,19.606-19.609h9.21     c10.771,0.02,19.586,8.835,19.603,19.609V64.447z M91.52,37.438c-0.542,6.394-3.598,14.196-6.548,20.293     c-1.386,2.879-2.746,5.392-3.792,7.235l-3.316-9.657V35.026c-0.003-5.43-1.895-10.431-5.045-14.389     c3.198,1.355,6.634,3.016,9.681,4.94c5.36,3.342,9.143,7.432,9.047,11.251C91.546,37.006,91.537,37.209,91.52,37.438z" />
            </g>
          </g>
        </g>
        <g>
          <g>
            <g>
              <path d="M56.673,66.258c-1.14,0.768-2.073,0.97-2.875,0.974c-0.801,0.003-1.494-0.229-1.984-0.466     c-0.007-0.003-0.011-0.006-0.017-0.009l-0.058-3.309c3.021-2.598,8.367-8.189-1.615-8.189c-9.818,0-4.806,5.411-1.765,8.061     l0.058,3.413c-0.489,0.244-1.222,0.51-2.052,0.501c-0.804-0.005-1.736-0.209-2.868-0.976c-0.772-0.528-1.823-0.328-2.349,0.44     c-0.526,0.771-0.33,1.82,0.442,2.347c1.635,1.127,3.306,1.565,4.739,1.565h0.035c1.625-0.013,2.883-0.496,3.718-0.94     c0.834,0.444,2.091,0.927,3.714,0.94h0.035c1.436,0,3.103-0.44,4.741-1.564c0.771-0.525,0.97-1.576,0.441-2.347     C58.491,65.93,57.442,65.729,56.673,66.258z M36.737,47.11c-2.167,0-3.925,1.757-3.925,3.926c0,2.169,1.757,3.927,3.925,3.927     c2.169,0,3.927-1.758,3.927-3.927C40.664,48.868,38.906,47.11,36.737,47.11z M63.48,47.11c-2.167,0-3.925,1.757-3.925,3.926     c0,2.169,1.758,3.927,3.925,3.927c2.17,0,3.927-1.758,3.927-3.927C67.407,48.868,65.65,47.11,63.48,47.11z M93.312,75.994     l-11.885-4.123c0.893-1.36,1.672-2.785,2.328-4.267h9.347c0.934,0,1.69-0.755,1.69-1.688s-0.757-1.69-1.69-1.69h-8.091     c0.568-1.896,0.938-3.866,1.099-5.891l7.202-2.499c0.882-0.306,1.348-1.268,1.043-2.149c-0.306-0.881-1.267-1.349-2.15-1.043     l-6.04,2.095c-0.008-0.181-0.006-0.357-0.018-0.539c-0.313-4.567-1.561-9.103-3.552-13.336     c1.808-10.314,5.398-13.745,8.584-19.619c0.626-1.167,0.96-2.275,0.96-3.352c0.014-1.362-0.587-2.557-1.367-3.342     c-2.374-2.288-5.754-2.328-5.896-2.402c-0.663-0.069-1.361-0.105-2.044-0.105c-8.679,0.093-15.306,5.385-19.166,9.479     c-4.211-1.996-8.808-3.161-13.612-3.218c-4.809,0.057-9.409,1.221-13.621,3.216c-3.862-4.094-10.487-9.383-19.163-9.477     c-0.687,0-1.383,0.036-2.092,0.109c-0.043,0.007-1.585,0.111-3.296,0.778c-0.851,0.339-1.77,0.821-2.552,1.62     c-0.781,0.783-1.381,1.979-1.369,3.341c0.002,1.07,0.332,2.187,0.965,3.354c3.182,5.866,6.768,9.296,8.576,19.592     c-1.999,4.241-3.25,8.786-3.564,13.363c-0.013,0.182-0.009,0.36-0.018,0.542l-6.053-2.1c-0.882-0.306-1.844,0.161-2.15,1.043     c-0.305,0.881,0.162,1.843,1.043,2.148l7.216,2.503c0.161,2.023,0.53,3.992,1.098,5.888H6.97c-0.934,0-1.689,0.757-1.689,1.69     c0,0.931,0.755,1.689,1.689,1.689h9.36c0.655,1.48,1.434,2.903,2.325,4.263L6.76,75.994c-0.882,0.306-1.348,1.269-1.043,2.149     c0.243,0.698,0.896,1.136,1.597,1.136c0.183,0,0.37-0.03,0.553-0.093l12.892-4.473c6.533,7.855,17.135,12.941,29.271,13.028     c12.148-0.087,22.756-5.172,29.292-13.025l12.883,4.469c0.184,0.063,0.371,0.094,0.555,0.094c0.7,0,1.354-0.438,1.596-1.137     C94.659,77.263,94.193,76.301,93.312,75.994z M82.832,15.423c0.571,0,1.148,0.026,1.74,0.088     c0.049,0.005,0.304,0.024,0.765,0.108c0.688,0.119,1.73,0.405,2.434,0.839c0.725,0.479,0.972,0.804,0.99,1.434     c0.002,0.358-0.117,0.933-0.557,1.751c-2.476,4.594-5.964,8.53-8.086,16.705c-1.066-1.686-2.26-3.294-3.557-4.814     c0.768-2.73,1.946-4.049,2.895-5.803c1.215-2.248-1.857-2.481-1.857-2.481c-2.885-0.298-5.264,1.251-6.822,2.702     c-1.278-1.007-2.616-1.932-4.007-2.765C70.378,19.59,76.104,15.355,82.832,15.423z M11.896,19.638     c-0.443-0.816-0.557-1.383-0.557-1.746c0.014-0.453,0.126-0.669,0.416-0.987c0.424-0.463,1.378-0.897,2.23-1.113     c0.424-0.111,0.816-0.185,1.094-0.225c0.275-0.04,0.402-0.047,0.402-0.05c0.635-0.066,1.215-0.094,1.789-0.094h0.034     c5.817,0,10.856,3.076,14.465,6.282c0.562,0.498,1.077,0.993,1.559,1.478c-1.391,0.833-2.729,1.757-4.007,2.763     c-1.559-1.449-3.935-2.993-6.815-2.696c0,0-3.073,0.233-1.857,2.481c0.946,1.75,2.123,3.068,2.891,5.787     c-1.297,1.519-2.491,3.125-3.558,4.81C17.858,28.163,14.372,24.233,11.896,19.638z M78.132,70.728l-4.37-1.516     c-0.882-0.306-1.844,0.162-2.149,1.043c-0.305,0.883,0.163,1.844,1.044,2.149l3.229,1.12     c-5.91,6.492-15.128,10.738-25.855,10.842c-10.716-0.104-19.928-4.351-25.835-10.845l3.221-1.117     c0.881-0.306,1.348-1.268,1.042-2.148c-0.306-0.882-1.268-1.348-2.15-1.042l-4.358,1.512c-0.702-1.001-1.328-2.044-1.882-3.12     h7.141c0.931,0,1.687-0.759,1.687-1.689c0-0.934-0.755-1.69-1.687-1.69h-8.594c-0.521-1.508-0.892-3.068-1.115-4.665l8.808,3.055     c0.184,0.064,0.371,0.095,0.554,0.095c0.7,0,1.354-0.438,1.596-1.137c0.306-0.881-0.162-1.843-1.042-2.149L17.26,55.901     c0.002-0.492,0.015-0.983,0.048-1.469c1.016-16.354,15.879-32.726,32.746-32.75c16.845,0.024,31.706,16.396,32.724,32.738     c0.031,0.494,0.043,0.985,0.048,1.476l-10.169,3.527c-0.881,0.307-1.349,1.27-1.044,2.15c0.242,0.698,0.896,1.136,1.597,1.136     c0.184,0,0.371-0.029,0.553-0.092l8.824-3.062c-0.223,1.599-0.596,3.16-1.116,4.669h-8.604c-0.935,0-1.689,0.757-1.689,1.69     s0.755,1.688,1.689,1.688h7.15C79.462,68.682,78.835,69.726,78.132,70.728z" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

CatIcon.propTypes = {
  className: PropTypes.string
};

export default CatIcon;