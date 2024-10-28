import { Form, message, Modal } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";

function AdminExperiences() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const [type, setType] = useState("add");

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      let response;

      if (selectedItemForEdit) {
        response = await axios.put("/api/portfolio/update-experience", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post("/api/portfolio/add-experience", values);
      }
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setShowEditModal(false);
        setSelectedItemForEdit(null);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const onDelete = async (item) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/delete-experience", {
        _id: item._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div>
      <div className="flex justify-end">
        <button
          className="bg-primary px-5 py-2 text-white gap-5"
          onClick={() => {
            setSelectedItemForEdit(null);
            setShowEditModal(true);
          }}
        >
          Add Experience
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-2 sm:grid-cols-1">
        {experiences.map((experience) => (
          <div className="shadow border-2 p-5 border-gray-400 flex-col">
            <h1 className="text-primary text-xl">{experience.period}</h1>
            <hr />
            <h1> Company : {experience.company}</h1>
            <h1> Role : {experience.title}</h1>
            <h1>{experience.description}</h1>
            <div className="flex justify-end gap-5 mt-5">
              <button
                className="bg-primary text-white px-5 py-2"
                onClick={() => {
                  setSelectedItemForEdit(experience);
                  setShowEditModal(true);
                  setType("edit");
                }}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-5 py-2"
                onClick={() => {
                  onDelete(experience);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {(type === "add" || selectedItemForEdit) && (
        <Modal
          open={showEditModal}
          title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
          footer={null}
          onCancel={() => {
            setShowEditModal(false);
            setSelectedItemForEdit(null);
          }}
        >
          <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={selectedItemForEdit}
          >
            <Form.Item name="period" label="Period">
              <input placeholder="Period" />
            </Form.Item>
            <Form.Item name="company" label="Company">
              <input placeholder="Company" />
            </Form.Item>
            <Form.Item name="title" label="Title">
              <input placeholder="Title" />
            </Form.Item>
            <Form.Item name="description" label="Description">
              <input placeholder="Description" />
            </Form.Item>
            <div className="flex justify-end">
              <button
                className="border-primary border-1  text-primary px-5 py-2"
                onClick={() => {
                  setShowEditModal(false);
                  setSelectedItemForEdit(null);
                }}
              >
                Cancel
              </button>
              <button className="bg-primary  text-white  px-5 py-2">
                {selectedItemForEdit ? "Update" : "Add"}
              </button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
}

export default AdminExperiences;
