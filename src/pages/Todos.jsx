import { Form, Table, Badge, Button, Modal } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { fetchTodos } from "../data/todos";

const Todos = () => {
  const newTitleRef = useRef();
  const newIdRef = useRef();
  // [fetchTodos] -> TodoRaw -> [filters] -> todos -> [pagination] -> view
  // OnlyWaiting ->

  //          Todos -> [] -> NumPage -> curPage
  //ItemPerPage ->

  const [TodosRaw, setTodosRaw] = useState([]);
  const [Todos, setTodos] = useState([]);
  const [OnlyWaiting, setOnlyWaiting] = useState(false);
  const [ItemPerPage, setItemPerPage] = useState(5);
  const [NumPage, setNumPage] = useState(3);
  const [CurPage, setCurPage] = useState(1);

  useEffect(() => {
    setTodosRaw(fetchTodos());
  }, []); //fetch todos on loaded

  useEffect(() => {
    if (OnlyWaiting)
      setTodos(
        TodosRaw.filter(
          (todo) => !todo.completed
          //Show only Waiting
        )
      );
    //Show All
    else setTodos(TodosRaw); // bypass filters
  }, [TodosRaw, OnlyWaiting, ItemPerPage]);

  useEffect(() => {
    console.log(`OnlyWait: ${OnlyWaiting}`);
  }, [OnlyWaiting]);

  useEffect(() => {
    setNumPage(Math.ceil(Todos.length / ItemPerPage));
  }, [ItemPerPage, Todos]);

  useEffect(() => {
    if (NumPage <= 0) setCurPage(0);
    else if (CurPage > NumPage) setCurPage(NumPage);
    else if (CurPage <= 0) setCurPage(1);
  }, [NumPage]);

  const waitingClick = (id) => {
    console.log(id);
    const foundTodo = Todos.find((todo) => {
      return todo.id === id;
    });
    foundTodo.completed = true;

    setTodosRaw([...TodosRaw]); //force to be effect for (refresh)
  };

  const deleteClick = (id) => {
    setTodosRaw(TodosRaw.filter((todo) => todo.id !== id));
  };

  // Handle modal ------------------------------------------------
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const saveClaick = (id, title) => {
    console.log(id, title);
    if (title.trim() !== " ") {
      const newTodo = setTodosRaw([
        ...TodosRaw,
        {
          userId: 1,
          id,
          title,
          completed: false,
        },
      ]);
    }
    newTitleRef.current.value = "";
    newIdRef.current.value = "";
    //

    handleClose();
  };
  return (
    <>
      {/* modal ---------------------------------------------------*/}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ID:</Form.Label>
              <Form.Control
                value={
                  TodosRaw.reduce(
                    (prev, todo) => (todo.id > prev ? todo.id : prev),
                    -1
                  ) + 1
                }
                disabled={true}
                ref={newIdRef}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title:</Form.Label>
              <Form.Control
                placeholder="new todos here!!"
                autoFocus
                ref={newTitleRef}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() =>
              saveClaick(
                Number(newIdRef.current.value),
                newTitleRef.current.value
              )
            }
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      {/* modal end ------------------------------------------------------------- */}
      {/* filters */}
      <Form>
        <div className="d-flex justify-content-between align-items-center mt-3 mx-2">
          <div className="d-flex align-items-center">
            <Form.Check
              className="fs-4"
              type="switch"
              id="custom-switch"
              // label={'Show only'}
              onChange={(e) => setOnlyWaiting(e.target.checked)}
            />
            Show only&nbsp;
            <Button variant="warning" className="btn-nonclick">
              waiting<i className="bi bi-clock ms-1"></i>
            </Button>
          </div>

          <Form.Select
            aria-label="Default select example"
            className="w-25"
            onChange={(e) => {
              setItemPerPage(e.target.value);
            }}
          >
            <option value={5}>5 items per page</option>
            <option value={10}>10 items per page</option>
            <option value={50}>50 items per page</option>
            <option value={100}>100 items per page</option>
          </Form.Select>
        </div>
      </Form>

      {/* table */}
      <div className="mt-2 mx-2">
        <Table striped bordered hover>
          <thead className="table-dark">
            <tr>
              <th
                className="text-center align-content-center"
                style={{ width: "3rem" }}
              >
                ID
              </th>
              <th className="text-center align-content-center">Title</th>
              <th className="text-end" style={{ width: "11rem" }}>
                Completed&nbsp;
                <Button style={{ width: "42px" }} onClick={() => handleShow()}>
                  +
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              //              1                5
              // Start = (CurPage - 1) * ItemPerPage    = 0
              // Stop  = CurPage * ItemPerPage - 1      = 4
              Todos.filter((todo, index) => {
                return (
                  index >= (CurPage - 1) * ItemPerPage &&
                  index <= CurPage * ItemPerPage - 1
                );
              }).map((todo) => {
                {
                  /* map = tranform  การเปลี่ยนให้สิ่งหนึ่งกลายเป็นอีกสิ่งหนึ่ง โดยจำนวนยังเท่าเดิม*/
                }
                return (
                  <tr>
                    <td className="text-center">
                      {" "}
                      <h5>
                        <Badge bg="secondary">{todo.id}</Badge>
                      </h5>
                    </td>
                    <td>{todo.title}</td> {/* Table ที่ดึงมาจาก todos.jsx */}
                    <td className="text-end">
                      {todo.completed ? (
                        <Badge bg="success" className="fs-6">
                          done<i className="bi bi-check ms-1"></i>
                        </Badge>
                      ) : (
                        <Button
                          variant="warning"
                          onClick={() => {
                            waitingClick(todo.id);
                          }}
                        >
                          waiting<i className="bi bi-clock ms-1"></i>
                        </Button>
                      )}
                      &nbsp;
                      <Button
                        variant="danger"
                        onClick={() => deleteClick(todo.id)}
                      >
                        <i class="bi bi-trash"></i>
                      </Button>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </Table>
      </div>

      {/* page control */}
      <div className="text-center mb-3">
        <Button
          variant="outline-primary"
          onClick={() => setCurPage(1)}
          disabled={CurPage === 1}
        >
          First
        </Button>
        &nbsp;
        <Button
          variant="outline-primary"
          onClick={() => CurPage > 1 && setCurPage((p) => p - 1)}
          disabled={CurPage === 1}
        >
          Previous
        </Button>
        &nbsp;
        <span>
          &nbsp;{CurPage}&nbsp;/&nbsp;{NumPage}&nbsp;
        </span>
        <Button
          variant="outline-primary"
          onClick={() => CurPage < NumPage && setCurPage((p) => p + 1)}
          disabled={CurPage === NumPage}
        >
          Next
        </Button>
        &nbsp;
        <Button
          variant="outline-primary"
          onClick={() => setCurPage(NumPage)}
          disabled={CurPage === NumPage}
        >
          Last
        </Button>
      </div>
    </>
  );
};

export default Todos;
