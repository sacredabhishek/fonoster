/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf')
var goog = jspb
var global = Function('return this')()

var appmanager_pb = require('./appmanager_pb.js')
goog.object.extend(proto, appmanager_pb)
goog.exportSymbol(
  'proto.yaps.numbers.v1alpha1.CreateNumberRequest',
  null,
  global
)
goog.exportSymbol(
  'proto.yaps.numbers.v1alpha1.GetIngressAppRequest',
  null,
  global
)
goog.exportSymbol('proto.yaps.numbers.v1alpha1.Number', null, global)

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yaps.numbers.v1alpha1.CreateNumberRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null)
}
goog.inherits(proto.yaps.numbers.v1alpha1.CreateNumberRequest, jspb.Message)
if (goog.DEBUG && !COMPILED) {
  proto.yaps.numbers.v1alpha1.CreateNumberRequest.displayName =
    'proto.yaps.numbers.v1alpha1.CreateNumberRequest'
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.yaps.numbers.v1alpha1.CreateNumberRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.yaps.numbers.v1alpha1.CreateNumberRequest.toObject(
      opt_includeInstance,
      this
    )
  }

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.yaps.numbers.v1alpha1.CreateNumberRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.yaps.numbers.v1alpha1.CreateNumberRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        number:
          (f = msg.getNumber()) &&
          proto.yaps.numbers.v1alpha1.Number.toObject(includeInstance, f)
      }

    if (includeInstance) {
      obj.$jspbMessageInstance = msg
    }
    return obj
  }
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yaps.numbers.v1alpha1.CreateNumberRequest}
 */
proto.yaps.numbers.v1alpha1.CreateNumberRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes)
  var msg = new proto.yaps.numbers.v1alpha1.CreateNumberRequest()
  return proto.yaps.numbers.v1alpha1.CreateNumberRequest.deserializeBinaryFromReader(
    msg,
    reader
  )
}

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yaps.numbers.v1alpha1.CreateNumberRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yaps.numbers.v1alpha1.CreateNumberRequest}
 */
proto.yaps.numbers.v1alpha1.CreateNumberRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break
    }
    var field = reader.getFieldNumber()
    switch (field) {
      case 1:
        var value = new proto.yaps.numbers.v1alpha1.Number()
        reader.readMessage(
          value,
          proto.yaps.numbers.v1alpha1.Number.deserializeBinaryFromReader
        )
        msg.setNumber(value)
        break
      default:
        reader.skipField()
        break
    }
  }
  return msg
}

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yaps.numbers.v1alpha1.CreateNumberRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter()
  proto.yaps.numbers.v1alpha1.CreateNumberRequest.serializeBinaryToWriter(
    this,
    writer
  )
  return writer.getResultBuffer()
}

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yaps.numbers.v1alpha1.CreateNumberRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yaps.numbers.v1alpha1.CreateNumberRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined
  f = message.getNumber()
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yaps.numbers.v1alpha1.Number.serializeBinaryToWriter
    )
  }
}

/**
 * optional Number number = 1;
 * @return {?proto.yaps.numbers.v1alpha1.Number}
 */
proto.yaps.numbers.v1alpha1.CreateNumberRequest.prototype.getNumber = function () {
  return /** @type{?proto.yaps.numbers.v1alpha1.Number} */ (jspb.Message.getWrapperField(
    this,
    proto.yaps.numbers.v1alpha1.Number,
    1
  ))
}

/** @param {?proto.yaps.numbers.v1alpha1.Number|undefined} value */
proto.yaps.numbers.v1alpha1.CreateNumberRequest.prototype.setNumber = function (
  value
) {
  jspb.Message.setWrapperField(this, 1, value)
}

proto.yaps.numbers.v1alpha1.CreateNumberRequest.prototype.clearNumber = function () {
  this.setNumber(undefined)
}

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yaps.numbers.v1alpha1.CreateNumberRequest.prototype.hasNumber = function () {
  return jspb.Message.getField(this, 1) != null
}

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yaps.numbers.v1alpha1.GetIngressAppRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null)
}
goog.inherits(proto.yaps.numbers.v1alpha1.GetIngressAppRequest, jspb.Message)
if (goog.DEBUG && !COMPILED) {
  proto.yaps.numbers.v1alpha1.GetIngressAppRequest.displayName =
    'proto.yaps.numbers.v1alpha1.GetIngressAppRequest'
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.yaps.numbers.v1alpha1.GetIngressAppRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.yaps.numbers.v1alpha1.GetIngressAppRequest.toObject(
      opt_includeInstance,
      this
    )
  }

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.yaps.numbers.v1alpha1.GetIngressAppRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.yaps.numbers.v1alpha1.GetIngressAppRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        e164Number: jspb.Message.getFieldWithDefault(msg, 1, '')
      }

    if (includeInstance) {
      obj.$jspbMessageInstance = msg
    }
    return obj
  }
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yaps.numbers.v1alpha1.GetIngressAppRequest}
 */
proto.yaps.numbers.v1alpha1.GetIngressAppRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes)
  var msg = new proto.yaps.numbers.v1alpha1.GetIngressAppRequest()
  return proto.yaps.numbers.v1alpha1.GetIngressAppRequest.deserializeBinaryFromReader(
    msg,
    reader
  )
}

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yaps.numbers.v1alpha1.GetIngressAppRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yaps.numbers.v1alpha1.GetIngressAppRequest}
 */
proto.yaps.numbers.v1alpha1.GetIngressAppRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break
    }
    var field = reader.getFieldNumber()
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString())
        msg.setE164Number(value)
        break
      default:
        reader.skipField()
        break
    }
  }
  return msg
}

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yaps.numbers.v1alpha1.GetIngressAppRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter()
  proto.yaps.numbers.v1alpha1.GetIngressAppRequest.serializeBinaryToWriter(
    this,
    writer
  )
  return writer.getResultBuffer()
}

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yaps.numbers.v1alpha1.GetIngressAppRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yaps.numbers.v1alpha1.GetIngressAppRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined
  f = message.getE164Number()
  if (f.length > 0) {
    writer.writeString(1, f)
  }
}

/**
 * optional string e164_number = 1;
 * @return {string}
 */
proto.yaps.numbers.v1alpha1.GetIngressAppRequest.prototype.getE164Number = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''))
}

/** @param {string} value */
proto.yaps.numbers.v1alpha1.GetIngressAppRequest.prototype.setE164Number = function (
  value
) {
  jspb.Message.setProto3StringField(this, 1, value)
}

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yaps.numbers.v1alpha1.Number = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null)
}
goog.inherits(proto.yaps.numbers.v1alpha1.Number, jspb.Message)
if (goog.DEBUG && !COMPILED) {
  proto.yaps.numbers.v1alpha1.Number.displayName =
    'proto.yaps.numbers.v1alpha1.Number'
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.yaps.numbers.v1alpha1.Number.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.yaps.numbers.v1alpha1.Number.toObject(
      opt_includeInstance,
      this
    )
  }

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.yaps.numbers.v1alpha1.Number} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.yaps.numbers.v1alpha1.Number.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        e164Number: jspb.Message.getFieldWithDefault(msg, 1, ''),
        ingressApp: jspb.Message.getFieldWithDefault(msg, 2, ''),
        createTime: jspb.Message.getFieldWithDefault(msg, 3, ''),
        updateTime: jspb.Message.getFieldWithDefault(msg, 4, '')
      }

    if (includeInstance) {
      obj.$jspbMessageInstance = msg
    }
    return obj
  }
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yaps.numbers.v1alpha1.Number}
 */
proto.yaps.numbers.v1alpha1.Number.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes)
  var msg = new proto.yaps.numbers.v1alpha1.Number()
  return proto.yaps.numbers.v1alpha1.Number.deserializeBinaryFromReader(
    msg,
    reader
  )
}

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yaps.numbers.v1alpha1.Number} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yaps.numbers.v1alpha1.Number}
 */
proto.yaps.numbers.v1alpha1.Number.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break
    }
    var field = reader.getFieldNumber()
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString())
        msg.setE164Number(value)
        break
      case 2:
        var value = /** @type {string} */ (reader.readString())
        msg.setIngressApp(value)
        break
      case 3:
        var value = /** @type {string} */ (reader.readString())
        msg.setCreateTime(value)
        break
      case 4:
        var value = /** @type {string} */ (reader.readString())
        msg.setUpdateTime(value)
        break
      default:
        reader.skipField()
        break
    }
  }
  return msg
}

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yaps.numbers.v1alpha1.Number.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter()
  proto.yaps.numbers.v1alpha1.Number.serializeBinaryToWriter(this, writer)
  return writer.getResultBuffer()
}

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yaps.numbers.v1alpha1.Number} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yaps.numbers.v1alpha1.Number.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined
  f = message.getE164Number()
  if (f.length > 0) {
    writer.writeString(1, f)
  }
  f = message.getIngressApp()
  if (f.length > 0) {
    writer.writeString(2, f)
  }
  f = message.getCreateTime()
  if (f.length > 0) {
    writer.writeString(3, f)
  }
  f = message.getUpdateTime()
  if (f.length > 0) {
    writer.writeString(4, f)
  }
}

/**
 * optional string e164_number = 1;
 * @return {string}
 */
proto.yaps.numbers.v1alpha1.Number.prototype.getE164Number = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''))
}

/** @param {string} value */
proto.yaps.numbers.v1alpha1.Number.prototype.setE164Number = function (value) {
  jspb.Message.setProto3StringField(this, 1, value)
}

/**
 * optional string ingress_app = 2;
 * @return {string}
 */
proto.yaps.numbers.v1alpha1.Number.prototype.getIngressApp = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''))
}

/** @param {string} value */
proto.yaps.numbers.v1alpha1.Number.prototype.setIngressApp = function (value) {
  jspb.Message.setProto3StringField(this, 2, value)
}

/**
 * optional string create_time = 3;
 * @return {string}
 */
proto.yaps.numbers.v1alpha1.Number.prototype.getCreateTime = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''))
}

/** @param {string} value */
proto.yaps.numbers.v1alpha1.Number.prototype.setCreateTime = function (value) {
  jspb.Message.setProto3StringField(this, 3, value)
}

/**
 * optional string update_time = 4;
 * @return {string}
 */
proto.yaps.numbers.v1alpha1.Number.prototype.getUpdateTime = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ''))
}

/** @param {string} value */
proto.yaps.numbers.v1alpha1.Number.prototype.setUpdateTime = function (value) {
  jspb.Message.setProto3StringField(this, 4, value)
}

goog.object.extend(exports, proto.yaps.numbers.v1alpha1)
